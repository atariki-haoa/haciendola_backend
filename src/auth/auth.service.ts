import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { IUser } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<IUser | null> {
    try {
      const user: IUser = await this.userService.findByUserName(username);
      if(!user) return null;
      
      const check = await bcrypt.compare(pass || '', user.password);
      if (check) return user;
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async login(user: any) {
    const result = await this.validateUser(user.email, user.password);
    if (!result)
      return {
        error:
          "Authentification error, password missmatch or user doesn't exist",
    };
    const payload = {
        username: result.username,
        role: result.role,
      };
    const token = this.jwtService.sign(payload);
    user.token = `Bearer ${token}`;
    return {
        token: `Bearer ${token}`,
        user,
      };
  }
}
