<<<<<<< HEAD
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
=======
import { IsDate, IsDecimal, IsInt, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateShareDto {
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsInt()
  @IsNotEmpty()
  number_share: number;

  @IsDate()
  @IsNotEmpty()
  expire_date: Date;

  @IsDate()
  @IsOptional()
  paid_date?: Date;

  @IsDecimal()
  @IsOptional()
  capital?: number;

  @IsDecimal()
  @IsOptional()
  interest?: number;

  @IsDecimal()
  @IsOptional()
  amount?: number;

  @IsUUID()
  @IsNotEmpty()
  creditId: string;

  @IsUUID()
  @IsOptional()
  stateId?: string; // Optional state for creation
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
}