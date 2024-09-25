<<<<<<< HEAD
import { PartialType } from '@nestjs/mapped-types';
import { CreditCreateDto } from './create-credit.dto';

export class CreditUpdateDto extends PartialType(CreditCreateDto) {}
=======
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
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
