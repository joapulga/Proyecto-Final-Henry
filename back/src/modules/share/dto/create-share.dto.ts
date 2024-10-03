import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class CreateShareDto {
  @IsString()
  idCredit: string;

  @IsNumber()
  numberSha: Number;

  @IsDate()
  expireDate:Date;

  @IsNumber()
  capital: Number;

  @IsNumber()
  interests: Number;

  @IsNumber()
  amount: Number;
}