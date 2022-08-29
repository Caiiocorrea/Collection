import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class ReadProdutoDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    nome: string

    @ApiProperty()
    descricao: string

    @ApiProperty()
    marca: string

    @ApiProperty()
    minqtd: number

    @ApiProperty()
    imagem: []
}