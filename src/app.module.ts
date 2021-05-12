import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [UsersController, ProductsController],
  providers: [ProductsService],
})
export class AppModule {}