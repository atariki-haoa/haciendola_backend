import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { Users, IUser } from './users.entity';
import { UserDTO } from './user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async save(user: UserDTO): Promise<IUser> {
    user.password = await bcrypt.hash(user.password, 10);
    return await this.usersRepository.save(user);
  }

  async findByUserName(username: string): Promise<IUser | undefined> {
    try {
      return await this.usersRepository.findOne({ username });
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  async findById(id: string): Promise<IUser | undefined> {
    try {
      return await this.usersRepository.findOne(id);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
}
