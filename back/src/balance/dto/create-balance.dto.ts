import { IsString,  IsDate } from 'class-validator';

export class CreateBalanceDto {
  @IsString()
  income: number;

  @IsString()
  expenses: number;

  @IsString()
  gain: number;

  @IsDate()
  date: Date;

  @IsString()
  observations: string;
}