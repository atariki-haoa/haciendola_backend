import { Body, HttpStatus, Response, Post, ForbiddenException, Res, HttpCode, HttpException, Get, SetMetadata, Param, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersSevice: UsersService) { }

    @Post('register')
    @HttpCode(201)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad request for invalid body values or format.' })
    @ApiBody({
        type: [UserDTO],
        description: 'UserDTO class implemented for validation.'
    })
    async Register(@Body() user: UserDTO) {
        try {
            let result = await this.usersSevice.save(user);
            if (!result)
                throw new HttpException(
                    {
                        status: HttpStatus.INTERNAL_SERVER_ERROR,
                        error: 'Error on save.',
                    },
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            delete result.password;
            return JSON.stringify({
                user: result
            });
        } catch (err) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Invalid value',
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async GetData(@Param('id') id: string,) {
        try {
            let result = await this.usersSevice.findById(id);
            return JSON.stringify({
                user: result
            });
        } catch (err) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Invalid value',
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}
