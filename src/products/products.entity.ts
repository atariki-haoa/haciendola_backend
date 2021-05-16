import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Products extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 1000 })
    handle: string;

    @Column('varchar', { length: 1000 })
    title: string;

    @Column('varchar', { length: 10000 })
    description: string;

    @Column('bigint', { unique: true })
    sku: number;

    @Column('float')
    grams: number;

    @Column('int')
    stock: number;

    @Column('int')
    price: number;

    @Column('int')
    comparePrice: number;

    @Column('bigint', { unique: true })
    barcode: number;
}

export interface IProduct extends BaseEntity {
    handle: string;
    title: string;
    description: string;
    sku: number;
    grams: number;
    stock: number;
    price: number;
    comparePrice: number;
    barcode: number;
}
