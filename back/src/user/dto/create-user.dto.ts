import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
  minLength,
} from 'class-validator';

export class CreateUserDto {
  /**
   * Will be the name of the user
   * @example Javier
   */
  @IsString()
  @Length(2, 15)
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * Last Name of the user who is going to register
   * @example Alcivar
   */
  @IsString()
  @Length(2, 15)
  lastname: string;

  /**
   * it should be the identification of the user
   * @example 2222222222
   */
  @IsString()
  @Length(8)
  dni: string;

  /**
   * Define a phone number for this user
   * @example 0000000000
   */
  @IsString()
  @Length(2, 20)
  phone: string;

  /**
   * Email it's necesary for supscritption of a new user
   * @example javier@email.com
   */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * Password should be strong
   * @example MyUs3er@175
   */
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;

  /**
   * Define if the user is or not Admin
   * @example false
   */
  @IsEmpty()
  is_admin: boolean;
}
