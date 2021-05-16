import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "typeorm";

export class ProductDTO extends BaseEntity {
  @ApiProperty({
    type: [String],
    description: 'Alphanumeric values with specials characters. It is friendly-programming version of title.',
    maximum: 1000,
  })
  handle: string;

  @ApiProperty({
    type: [String],
    description: 'Alphanumeric values with specials characters. Name of the product.',
    maximum: 1000,
  })
  title: string;

  @ApiProperty({
    type: [String],
    description: 'Alphanumeric values with specials characters. Little HTML of the product description.',
    maximum: 10000,
  })
  description: string;

  @ApiProperty({
    type: [Number],
    description: 'Numeric BIGINT value. SKU number of product.',
  })
  sku: number;

  @ApiProperty({
    type: [Number],
    description: 'Numeric FLOAT value. Weigth value of product.',
  })
  grams: number;

  @ApiProperty({
    type: [Number],
    description: 'Numeric INT value. Stock count of product.',
  })
  stock: number;

  @ApiProperty({
    type: [Number],
    description: 'Numeric INT value. Price of the product.',
  })
  price: number;

  @ApiProperty({
    type: [Number],
    description: 'Numeric INT value. Price for comparision of the product.',
  })
  comparePrice: number;

  @ApiProperty({
    type: [Number],
    description: 'Numeric BIGINT value. Barcode number of the product.',
  })
  barcode: number;
}