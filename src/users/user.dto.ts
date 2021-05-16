import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString } from 'class-validator';
import { UserRole } from './users.entity';

export class UserDTO {
  @ApiProperty({
    type: [String],
    description: 'String field there accept alphanumeric fields.', 
    maximum: 1000,
  } )
  @IsDefined()
  @IsEmail()
  username: string;

  @ApiProperty({
    type: [String],
    description: 'Match with the username and will be encrypted on DB. Needs almost one special char and number.', 
    maximum: 100,
  } )
  @IsDefined()
  @IsString()
  password: string;

  @ApiProperty({
    type: [Number],
    description: 'User roles used to authenticate endpoints.', 
    enum: ['Administrator', 'User']
  } )
  role: UserRole;
}
