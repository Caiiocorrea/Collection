import { ProdutosController } from './produtos.controller';
import { ProdutoSchema } from '../../models/produto.model';
import { ProdutosService } from './produtos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    }),
    MongooseModule.forFeature([{
      name: 'Produto', schema: ProdutoSchema,
    }])
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService,],
  exports: [ProdutosService],
})
export class ProdutosModule { }
