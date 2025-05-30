import {
  IsNumber,
  IsString,
  IsEmail,
  IsDateString,
  IsBoolean,
} from 'class-validator';
export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  isActive?: boolean;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
