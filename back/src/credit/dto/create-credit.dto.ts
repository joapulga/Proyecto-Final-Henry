import { IsDecimal, IsInt, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateCreditDto {
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsDecimal()
  @IsInt({ message: 'Amount must be an integer' }) // Enforce integer for amount
  @IsNotEmpty()
  amount: number;

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
}