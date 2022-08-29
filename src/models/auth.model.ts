import * as mongoose from 'mongoose';

export const AuthSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    active: { type: Boolean, required: false, default: true },
});

export interface Auth {
    nome: string,
    email: string,
    senha: string,
    active: boolean
}