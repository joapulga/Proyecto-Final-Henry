import { IsDecimal, IsInt, IsUUID, IsNotEmpty } from 'class-validator';

export class UploadCreditDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

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
}
