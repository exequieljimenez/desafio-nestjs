import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsModule } from './products/products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory:async (config: ConfigService) => ({
        uri: config.get('MONGO_URL'),
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
