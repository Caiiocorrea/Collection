import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateProdutoDto {
    @IsNotEmpty()
    @ApiProperty()
    nome: string

    @ApiProperty()
    descricao: string

    @IsNotEmpty()
    @ApiProperty()
    marca: string

    @IsNotEmpty()
    @ApiProperty()
    minqtd: number

    @ApiProperty()
    imagem: []

    @ApiProperty()
    active: boolean
}