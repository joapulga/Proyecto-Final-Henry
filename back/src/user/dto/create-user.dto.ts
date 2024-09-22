import { IsString, IsNumber, IsNotEmpty, IsEmail} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

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
}
