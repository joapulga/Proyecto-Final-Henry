<<<<<<< HEAD
import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';
export class UpdateShareDto{
    @IsString()
    @IsOptional()
    idCredit?: string;
  
    @IsNumber()
    @IsOptional()
    numberSha?: number;
  
    @IsDate()
    @IsOptional()
    expireDate?: Date;
  
    @IsNumber()
    @IsOptional()
    capital?: number;
  
    @IsNumber()
    @IsOptional()
    interests?: number;
  
    @IsNumber()
    @IsOptional()
    amount?: number;
  }
=======
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
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
