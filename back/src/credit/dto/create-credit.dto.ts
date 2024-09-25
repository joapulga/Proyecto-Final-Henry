<<<<<<< HEAD
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
=======
import { IsDecimal, IsInt, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateCreditDto {

  /**
   * The amount of some credit
   * @example 3000
   */
  @IsDecimal()
  @IsInt({ message: 'Amount must be an integer' }) // Enforce integer for amount
  @IsNotEmpty()
  amount: number;

  /**
   * Quantity of months for some 
   */
  @IsInt()
  @IsNotEmpty()
  months: number;

  @IsDecimal()
  @IsNotEmpty()
  interest: number;

  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsOptional()
  stateId?: string; // Optional state for creation
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
}