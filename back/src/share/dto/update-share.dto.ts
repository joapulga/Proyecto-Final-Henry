import { IsDate, IsDecimal, IsOptional, IsInt, IsNotEmpty, IsUUID } from 'class-validator';

export class UploadShareDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

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
  stateId?: string; // Optional state for update
}
