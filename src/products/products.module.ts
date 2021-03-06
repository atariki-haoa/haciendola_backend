import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  exports: [ProductsService, TypeOrmModule],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
