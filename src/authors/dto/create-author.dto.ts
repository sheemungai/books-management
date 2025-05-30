import { IsNumber, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateAuthorDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  bio: string;

  @IsDateString()
  @IsOptional()
  dateOfBirth: Date;

  @IsString()
  isActive: boolean;
}
