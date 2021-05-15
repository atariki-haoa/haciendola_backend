import { ApiProperty } from "@nestjs/swagger";

export class LoginDTO {
  @ApiProperty({
    type: [String],
    description: 'Only accepts alphanumeric values.', 
    maximum: 100,
  } )
  username: string;

  @ApiProperty({
    type: [String],
    description: 'Only accepts alphanumeric values.', 
    maximum: 100,
  } )
  password: string;
}
