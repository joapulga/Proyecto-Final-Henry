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
}