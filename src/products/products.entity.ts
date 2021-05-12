import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Products extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 100 })
    handle: string;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 1000,  nullable: true })
    description: string;

    @Column('int')
    sku: number;

    @Column('float')
    grams: number;

    @Column('int')
    stock: number;

    @Column('decimal')
    price: number;

    @Column('decimal')
    comparePrice: number;

    @Column({ nullable: true})
    barcode: number;
}