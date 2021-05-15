import { Controller, HttpCode, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, HttpStatus, Response, Post } from '@nestjs/common';
import { LoginDTO } from './login.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'Login succesfull.'})
    @ApiResponse({ status: 403, description: 'Invalid credentials.'})
    @ApiResponse({ status: 400, description: 'Bad request for invalid formats.'})
    @ApiBody({ 
        type: [LoginDTO],
        description: 'UserDTO class implemented for validation.'
    })
    @Post('login')
    async login(@Body() user: LoginDTO) {
        try {
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
        } catch (err) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'Invalid login credentials',
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}
