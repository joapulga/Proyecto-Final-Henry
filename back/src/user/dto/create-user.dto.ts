import { IsString, IsNumber, IsEmail} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsNumber()
  dni: number;

  @IsNumber()
  phone: number;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  imgUrl: string;

  @IsString()
  address: string;
}

