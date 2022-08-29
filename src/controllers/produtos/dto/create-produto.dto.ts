import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateProdutoDto {
    @IsNotEmpty()
    @ApiProperty()
    nome: string

    @ApiProperty()
    descricao: string

    @ApiProperty()
    marca: string

    @IsNotEmpty()
    @ApiProperty()
    minqtd: number

    @ApiProperty()
    imagem: []
}