import { ProdutosModule } from './controllers/produtos/produtos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/collection?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'),
    ProdutosModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }