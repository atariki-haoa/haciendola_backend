import { Controller, HttpCode, HttpException, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, HttpStatus, Response, Post } from '@nestjs/common';
import { LoginDTO } from './login.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDTO } from 'src/users/user.dto';
import { IUser } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,
        private usersService: UsersService) { }

    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'Login succesfull.' })
    @ApiResponse({ status: 403, description: 'Invalid credentials.' })
    @ApiResponse({ status: 400, description: 'Bad request for invalid formats.' })
    @ApiBody({
        type: [LoginDTO],
        description: 'UserDTO class implemented for validation.'
    })
    @Post('login')
    async login(@Body() user: LoginDTO) {
        return this.authenticateUser(user);
    }

    @Post('register')
    @HttpCode(201)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 400, description: 'Bad request for invalid body values or format.' })
    @ApiBody({
        type: [UserDTO],
        description: 'UserDTO class implemented for validation.'
    })
    async register(@Body() user: UserDTO) {
        const tempPass = user.password;
        let result: IUser | string = await this.usersService.save(user);
        if (typeof (result) === "string") {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: result,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        result.password = tempPass;
        return this.authenticateUser(result);
    }

    async authenticateUser(user) {
        let result = await this.authService.login(user);
        if (result.error)
            throw new HttpException(
                {
                    status: HttpStatus.FORBIDDEN,
                    error: result.error,
                },
                HttpStatus.FORBIDDEN,
            );
        return JSON.stringify(result);
    }
}
