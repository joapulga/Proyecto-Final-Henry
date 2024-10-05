import { IsString } from 'class-validator';

export class CreateStateDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}