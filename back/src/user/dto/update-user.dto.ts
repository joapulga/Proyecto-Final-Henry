import { IsString, IsNumber, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsNumber()
  @IsOptional()
  dni?: number;

  @IsNumber()
  @IsOptional()
  phone?: number;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;
  
  @IsString()
  @IsOptional()
  imgUrl: string;

  @IsString()
  @IsOptional()
  address?: string;
}