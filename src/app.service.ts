import { OnModuleInit } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as XLSX from 'xlsx';

import { Products } from './products/products.entity';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>
  ) { }
  async onModuleInit() {
    console.log('Checking data on db...');
    await this.populate();
  }

  async populate() {
    const result: number = await this.productsRepository.count();
    if(result < 1) {
      const file = './src/products/files/data.xlsx';
      const workbook = XLSX.readFile(file);
      const sheet: XLSX.WorkSheet = workbook.Sheets['Hoja1'];
      const data: any = XLSX.utils.sheet_to_json(sheet);
      try {
        for(let i = 0; i < data.length; i++) {
          const row = {
            handle: data[i].Handle,
            comparePrice: data[i]["Compare Price"],
            description: data[i].Description ,
            sku: data[i].SKU,
            grams: data[i].Grams,
            stock: data[i].Stock,
            price: data[i].Price,
            title: data[i].Title,
            barcode: data[i].Barcode,
          }
          await this.productsRepository.save(row);
        }
      } catch(err) {
        console.log(err);
      }

    }
  }
}
