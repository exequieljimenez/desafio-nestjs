import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product, productSchema } from './schemas/products.schemas'
import { MongooseModule } from '@nestjs/mongoose'
 
@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: productSchema,
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
