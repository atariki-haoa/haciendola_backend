import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Products extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 100 })
    handle: string;

    @Column('varchar', { length: 100 })
    title: string;

    @Column('varchar', { length: 1000 })
    description: string;

    @Column('bigint')
    sku: number;

    @Column('float')
    grams: number;

    @Column('int')
    stock: number;

    @Column('int')
    price: number;

    @Column('int')
    comparePrice: number;

    @Column('bigint')
    barcode: number;
}