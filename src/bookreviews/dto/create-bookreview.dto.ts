import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateBookreviewDto {
  @IsNumber()
  id: number;

  @IsString()
  content: string;

  @IsNumber()
  rating: number;

  @IsDateString()
  created_at: Date;
}
