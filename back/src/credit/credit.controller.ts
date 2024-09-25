import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditService } from './credit.service';
<<<<<<< HEAD
import { CreditCreateDto } from './dto/create-credit.dto';
import { CreditUpdateDto } from './dto/update-credit.dto';
=======
import { CreateCreditDto } from './dto/create-credit.dto';
import { UploadCreditDto } from './dto/update-credit.dto';
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01

@Controller('credit')
export class CreditController {
  constructor(private readonly creditService: CreditService) {}

  @Post()
<<<<<<< HEAD
  create(@Body() createCreditDto: CreditCreateDto) {
=======
  create(@Body() createCreditDto: CreateCreditDto) {
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
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
<<<<<<< HEAD
  update(@Param('id') id: string, @Body() updateCreditDto: CreditUpdateDto) {
    return this.creditService.update(id, updateCreditDto);
=======
  update(@Param('id') id: string, @Body() UploadCreditDto: UploadCreditDto) {
    return this.creditService.update(id, UploadCreditDto);
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditService.remove(id);
  }
}
