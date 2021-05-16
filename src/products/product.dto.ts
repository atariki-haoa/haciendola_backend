import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";
import { BaseEntity } from "typeorm";

export class ProductDTO extends BaseEntity {
  @ApiProperty({
    type: [String],
    description: 'Alphanumeric values with specials characters. It is friendly-programming version of title.',
    maximum: 1000,
  })
  @IsDefined()
  handle: string;

  @ApiProperty({
    type: [String],
    description: 'Alphanumeric values with specials characters. Name of the product.',
    maximum: 1000,
  })
  @IsDefined()
  title: string;

  @ApiProperty({
    type: [String],
    description: 'Alphanumeric values with specials characters. Little HTML of the product description.',
    maximum: 10000,
  })
  @IsDefined()
  description: string;

  @ApiProperty({
    type: [Number],
    description: 'Numeric BIGINT value. SKU number of product.',
  })
  @IsDefined()
  sku: number;

  @ApiProperty({
    type: [Number],
    description: 'Numeric FLOAT value. Weigth value of product.',
  })
  @IsDefined()
  grams: number;

  @ApiProperty({
    type: [Number],
    description: 'Numeric INT value. Stock count of product.',
  })
  @IsDefined()
  stock: number;

  @ApiProperty({
    type: [Number],
    description: 'Numeric INT value. Price of the product.',
  })
  @IsDefined()
  price: number;

  @ApiProperty({
    type: [Number],
    description: 'Numeric INT value. Price for comparision of the product.',
  })
  @IsDefined()
  comparePrice: number;

  @ApiProperty({
    type: [Number],
    description: 'Numeric BIGINT value. Barcode number of the product.',
  })
  @IsDefined()
  barcode: number;
}