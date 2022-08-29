import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MessagesHelper } from '../../helpers/messages.helper';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { DeleteProdutoDto } from './dto/delete-produto.dto';
import { ReadProdutoDto } from './dto/read-produto.dto.';
import { Produto } from '../../models/produto.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProdutosService {
    constructor(
        @InjectModel('Produto')
        private produtoModel: Model<Produto>
    ) { }


    async create(data: any): Promise<CreateProdutoDto> {
        try {
            return await this.produtoModel.find({ nome: data.nome }).then(async (produto) => {
                if (produto[0]) { throw new HttpException('Produto já cadastrado.', HttpStatus.BAD_REQUEST) }
                else {
                    const result = new this.produtoModel(data).save()
                    return result
                }
            }).catch((error) => { return error })
        } catch (error) {
            throw new HttpException({ message: MessagesHelper.MESSAGE_500, error: `${error.message}` }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async find(): Promise<ReadProdutoDto[]> {
        try {
            return await this.produtoModel.find({ active: true })
        } catch (error) {
            throw new HttpException({ message: MessagesHelper.MESSAGE_500, error: `${error.message}` }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async filter(data: any): Promise<ReadProdutoDto[]> {
        try {
            return await this.produtoModel.find({
                $text: {
                    $search: data.searchString,
                    $caseSensitive: false,
                    $diacriticSensitive: false
                }
            })
        } catch (error) {
            throw new HttpException({ message: MessagesHelper.MESSAGE_500, error: `${error.message}` }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async update(id: string, data: UpdateProdutoDto): Promise<UpdateProdutoDto[]> {
        try {
            return await this.produtoModel.findOneAndUpdate({ _id: id }, data, { new: true }).then((produto) => {
                return { message: 'Produto atualizado com sucesso.', produto }
            }).catch((error) => { return error })
        } catch (error) {
            throw new HttpException({ message: MessagesHelper.MESSAGE_500, error: `${error.message}` }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async delete(id: string, data: DeleteProdutoDto): Promise<UpdateProdutoDto[]> {
        try {
            return await this.produtoModel.findOneAndUpdate({ _id: id }, data, { new: true }).then((produto) => {
                return { message: 'Produto excluído com sucesso.', produto }
            }).catch((error) => { return error })
        } catch (error) {
            throw new HttpException({ message: MessagesHelper.MESSAGE_500, error: `${error.message}` }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
