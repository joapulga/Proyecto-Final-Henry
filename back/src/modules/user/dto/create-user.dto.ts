import { IsString, IsEmail, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
 
  name: string;

  @IsString()
 
  lastName: string;

  @IsString()
 
  dni: string;

  @IsString()
 
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
 
  imgUrl: string;

  @IsString()
 
  address: string;

  @IsBoolean()
 
  is_admin: boolean;
}


