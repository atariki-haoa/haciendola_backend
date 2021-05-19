import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDTO } from './product.dto';
import { ProductsService } from './products.service';

@ApiResponse({ status: 401, description: 'Unauthorized. Token is not valid or the request do not have auth header' })
@UseGuards(AuthGuard('jwt'))
@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Post('new')
    @HttpCode(201)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad request for invalid body values or format.' })
    @ApiBody({
        type: [ProductDTO],
        description: 'UserDTO class implemented for validation.'
    })
    async NewProduct(@Body() product: ProductDTO) {
        let result = await this.productService.save(product);
        if (!result)
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Error to save product.',
                },
                HttpStatus.BAD_REQUEST,
            );
        return JSON.stringify({
            product: result
        });
    }

    @Get(':id')
    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'Object has been find.' })
    @ApiResponse({ status: 400, description: 'Bad request for invalid body values or format.' })
    async GetProduct(@Param('id') id: string) {
        let result = await this.productService.findById(id);
        if (!result)
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'ID maybe incorrect or object not longer exists',
                },
                HttpStatus.BAD_REQUEST,
            );
        return JSON.stringify({
            product: result
        });
    }

    @Put(':id')
    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'Object has been find.' })
    @ApiResponse({ status: 400, description: 'Bad request for invalid body values or format.' })
    @ApiBody({
        type: [ProductDTO],
        description: 'ProductDTO class implemented for validation.'
    })
    async UpdateProduct(@Param('id') id: string, @Body() product: ProductDTO) {
        let result = await this.productService.modifiedById(id, product);
        if (!result)
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Incorrect param value or format.',
                },
                HttpStatus.BAD_REQUEST,
            );
        return JSON.stringify({
            product: result
        });
    }

    @Delete(':id')
    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'Object has been find.' })
    @ApiResponse({ status: 400, description: 'Bad request for invalid body values or format.' })
    async DeleteProduct(@Param('id') id: string) {
        let result = await this.productService.deleteById(id);
        if (!result)
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Incorrect param value or format.',
                },
                HttpStatus.BAD_REQUEST,
            );
        return JSON.stringify({
            product: result
        });
    }

    @Get()
    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'Object has been find.' })
    @ApiResponse({ status: 404, description: 'Error to find products' })
    async GetAllproducts() {
        let result = await this.productService.findAll();
        if (!result)
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Error to find products.',
                },
                HttpStatus.NOT_FOUND,
            );
        return JSON.stringify({
            products: result
        });
    }
}
