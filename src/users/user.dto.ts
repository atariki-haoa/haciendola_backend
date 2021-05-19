import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString, MinLength } from 'class-validator';
import { UserRole } from './users.entity';

export class UserDTO {
  @ApiProperty({
    type: [String],
    description: 'String field there accept email valid format.', 
    maximum: 1000,
  } )
  @IsDefined()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: [String],
    description: 'Must be longer than or equal to 8 characters.', 
    maximum: 100,
  } )
  @IsDefined()
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({
    type: [Number],
    description: 'User roles used to authenticate endpoints.', 
    enum: ['Administrator', 'User']
  } )
  role: UserRole;

  @ApiProperty({
    type: [Number],
    description: 'User roles used to authenticate endpoints.', 
    enum: ['Administrator', 'User']
  } )
  username?: string;
}
