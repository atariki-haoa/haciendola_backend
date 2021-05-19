import { Body, HttpStatus, Post, HttpCode, HttpException, Get, Param, UseGuards, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';
import { IUser } from './users.entity';

@ApiResponse({ status: 401, description: 'Unauthorized. Token is not valid or the request do not have auth header' })
@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersSevice: UsersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('recovery/:username')
    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'Recover user password' })
    @ApiResponse({ status: 400, description: 'Bad request for invalid body values or format.' })
    async passwordRecovery(@Param('username') username: string,) {
        let result = await this.usersSevice.passwordRecovery(username);
        if (!result) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Invalid value',
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        return JSON.stringify({
            user: result
        });

    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'Update password user' })
    @ApiResponse({ status: 400, description: 'Bad request for invalid body values or format.' })
    async updateUser(@Param('id') id: string, @Body() user: UserDTO) {
        let result = await this.usersSevice.update(id, user);
        if (!result) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Invalid value',
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        return JSON.stringify({
            user: result
        });
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':username')
    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'Find user by name' })
    @ApiResponse({ status: 400, description: 'Bad request for invalid body values or format.' })
    async findUserByUsername(@Param('username') username: string,) {
        let result = await this.usersSevice.findByUserName(username);
        if (!result) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Invalid value',
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        return JSON.stringify({
            user: result
        });
    }
}
