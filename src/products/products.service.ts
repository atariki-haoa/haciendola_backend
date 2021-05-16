import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDTO } from './product.dto';
import { Products, IProduct } from './products.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Products)
        private readonly productsRepository: Repository<Products>
    ) { }

    async save(product: ProductDTO): Promise<IProduct> {
        try {
            return await this.productsRepository.save(product);
        } catch (err) {
            console.log(err);
            return undefined;
        }
    }

    async findById(id: string): Promise<IProduct | undefined> {
        try {
            return await this.productsRepository.findOne(id);
        } catch (err) {
            console.log(err);
            return undefined;
        }
    }

    async findAll(): Promise<Array<IProduct> | undefined> {
        try {
            return await this.productsRepository.find();
        } catch (err) {
            console.log(err);
            return undefined;
        }
    }

    async modifiedById(id: string, product: ProductDTO): Promise<any | undefined> {
        try {
            return await this.productsRepository.update(id, product);
        } catch (err) {
            console.log(err);
            return undefined;
        }
    }

    async deleteById(id: string): Promise<any | undefined> {
        try {
            return await this.productsRepository.delete(id);
        } catch (err) {
            console.log(err);
            return undefined;
        }
    }
}
