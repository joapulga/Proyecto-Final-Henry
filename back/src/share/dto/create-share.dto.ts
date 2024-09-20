import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class CreateShareDto {
  @IsString()
  idCredit: string;

  @IsNumber()
  numberSha: number;

  @IsDate()
  expireDate: Date;

  @IsNumber()
  capital: number;

  @IsNumber()
  interests: number;

  @IsNumber()
  amount: number;
}