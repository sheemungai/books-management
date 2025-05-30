import { IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateBookDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  publicationYear: number;

  @IsBoolean()
  isAvailable: boolean;
}
