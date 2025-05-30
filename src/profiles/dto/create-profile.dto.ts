import { IsNumber, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateProfileDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  bio: Text;
  @IsString()
  @IsOptional()
  avatar: string;
  @IsDateString()
  @IsOptional()
  dateOfBirth: Date;
  @IsString()
  @IsOptional()
  location: string;
}
