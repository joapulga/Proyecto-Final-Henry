import { PartialType } from '@nestjs/mapped-types';
import { CreditCreateDto } from './create-credit.dto';

export class CreditUpdateDto extends PartialType(CreditCreateDto) {}
