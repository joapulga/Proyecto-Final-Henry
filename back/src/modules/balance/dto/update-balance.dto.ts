import { IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateBalanceDto {
    @IsString()
    @IsOptional()
    income?: number;
  
    @IsString()
    @IsOptional()
    expenses?: number;
  
    @IsString()
    @IsOptional()
    gain?: number;
  
    @IsDate()
    @IsOptional()
    date?: Date;
  
    @IsString()
    @IsOptional()
    observations?: string;
  }