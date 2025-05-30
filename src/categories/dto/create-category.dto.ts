import { IsString, IsNumber } from 'class-validator';

export class CreateCategoryDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
}
