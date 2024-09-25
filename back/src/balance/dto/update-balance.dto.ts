<<<<<<< HEAD
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
=======
import { PartialType } from '@nestjs/mapped-types';
import { CreateBalanceDto } from './create-balance.dto';

export class UpdateBalanceDto extends PartialType(CreateBalanceDto) {}
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
