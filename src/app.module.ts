import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';

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
  ],
  providers: [AppService],
})
export class AppModule { }