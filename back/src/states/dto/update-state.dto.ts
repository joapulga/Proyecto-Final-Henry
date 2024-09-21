import { IsString, IsOptional } from 'class-validator';

export class UpdateStateDto {
    @IsString()
    @IsOptional()
    name?: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  }