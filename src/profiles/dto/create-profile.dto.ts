import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsOptional()
  bio: string;

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
