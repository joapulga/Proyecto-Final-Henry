import { IsUUID, IsDate, IsNumber } from 'class-validator';

export class CreditCreateDto {
  @IsUUID()
  clientId: string;

  @IsDate()
  creditDate: Date;

  @IsNumber()
  amount: number;

  @IsNumber()
  months: number;

  @IsNumber()
  interest: number;

  @IsUUID()
  idState: string;
}