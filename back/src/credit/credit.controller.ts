import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditCreateDto } from './dto/create-credit.dto';
import { CreditUpdateDto } from './dto/update-credit.dto';

@Controller('credit')
export class CreditController {
  constructor(private readonly creditService: CreditService) {}

  @Post()
  create(@Body() createCreditDto: CreditCreateDto) {
    return this.creditService.create(createCreditDto);
  }

  @Get()
  findAll() {
    return this.creditService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creditService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreditDto: CreditUpdateDto) {
    return this.creditService.update(id, updateCreditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditService.remove(id);
  }
}
