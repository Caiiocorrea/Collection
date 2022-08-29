import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { DeleteProdutoDto } from './dto/delete-produto.dto';
import { ReadProdutoDto } from './dto/read-produto.dto.';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { ProdutosService } from './produtos.service';


@Controller('api/v1')
export class ProdutosController {
    constructor(
        private readonly produtosService: ProdutosService
    ) { }

    @Post('produto')
    @ApiBody({ type: CreateProdutoDto, description: 'Cadastrar produto' })
    create(@Body() data: any): Promise<CreateProdutoDto> {
        return this.produtosService.create(data);
    }

    @Get('produtos')
    @ApiResponse({ description: 'Buscar todos os produtos' })
    find(): Promise<ReadProdutoDto[]> {
        return this.produtosService.find();
    }

    @Get('filtro')
    @ApiResponse({ description: 'Filtrar produtos' })
    filter(@Query() data: any): Promise<ReadProdutoDto[]> {
        return this.produtosService.filter(data);
    }

    @Put('produto/:id')
    @ApiBody({ type: UpdateProdutoDto, description: 'Atualizar produto' })
    update(@Param('id') id: string, @Body() data: UpdateProdutoDto): Promise<UpdateProdutoDto[]> {
        return this.produtosService.update(id, data);
    }

    @Delete('produto/:id')
    @ApiBody({ type: DeleteProdutoDto, description: 'Excluir produto' })
    delete(@Param('id') id: string, @Query() active: DeleteProdutoDto): Promise<UpdateProdutoDto[]> {
        return this.produtosService.delete(id, active);
    }
}
