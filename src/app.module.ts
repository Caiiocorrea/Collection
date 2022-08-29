import { ProdutosModule } from './controllers/produtos/produtos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGOURI),
    ProdutosModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }