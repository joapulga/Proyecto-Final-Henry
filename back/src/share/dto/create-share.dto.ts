import { IsDate, IsDecimal, IsInt, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Credit } from 'src/credit/entities/credit.entity';
import { State } from 'src/state/entities/state.entity';

export class CreateShareDto {

  @IsInt()
  @IsNotEmpty()
  number_share: number;

  @IsDate()
  @IsNotEmpty()
  expirate_date: Date;

  @IsDate()
  @IsNotEmpty()
  paid_date?: Date;

  @IsDecimal()
  @IsNotEmpty()
  capital: number;

  @IsDecimal()
  @IsNotEmpty()
  interest: number;

  @IsDecimal()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  credit: Credit;

  @IsNotEmpty()
  state: State; // Optional state for creation
}