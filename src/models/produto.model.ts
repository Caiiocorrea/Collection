import * as mongoose from 'mongoose';

export const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: false },
    marca: { type: String, required: false },
    minqtd: { type: Number, required: true },
    imagem: { type: Array, required: false },
    active: { type: Boolean, required: false, default: true },
});

export interface Produto {
    nome: string,
    descricao: string,
    marca: string,
    minqtd: number,
    imagem: [],
    active: boolean
}