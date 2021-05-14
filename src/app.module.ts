import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'pguser',
      password: 'pguser',
      database: 'pgdb',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    ProductsModule,
    AuthModule
  ],
  controllers: [
    UsersController,
    ProductsController
  ],
  providers: [ProductsService],
})
export class AppModule { }