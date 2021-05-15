import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from './users.entity';

export class UserDTO {
  @ApiProperty({
    type: [String],
    description: 'Only accepts alphanumeric values.', 
    maximum: 100,
  } )
  username: string;

  @ApiProperty({
    type: [String],
    description: 'Match with the username and will be encrypted on DB. Needs almost one special char and number.', 
    maximum: 100,
  } )
  password: string;

  @ApiProperty({
    type: [Number],
    description: 'User roles used to authenticate endpoints.', 
    enum: ['Administrator', 'User']
  } )
  role: UserRole;
}
