import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsString } from "class-validator";

export class LoginDTO {
  @ApiProperty({
    type: [String],
    description: 'Only accepts alphanumeric values.', 
    maximum: 100,
  } )
  @IsDefined()
  @IsString()
  email: string;

  @ApiProperty({
    type: [String],
    description: 'Only accepts alphanumeric values.', 
    maximum: 100,
  } )
  @IsDefined()
  @IsString()
  password: string;
}
