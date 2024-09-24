import { IsString,  IsDate, IsNumber } from 'class-validator';

export class CreateBalanceDto {
  @IsNumber()
  income: number;

  @IsNumber()
  expenses: number;

  @IsNumber()
  gain: number;

  @IsDate()
  date: Date;

  @IsString()
  observations: string;
}