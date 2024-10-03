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