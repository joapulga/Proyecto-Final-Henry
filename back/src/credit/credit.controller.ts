import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UploadCreditDto } from './dto/update-credit.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Credits')
@Controller('credit')
export class CreditController {
  constructor(private readonly creditService: CreditService) {}

  @Post(':id')
  create(@Param('id') id: string, @Body() createCreditDto: CreateCreditDto) {
    return this.creditService.create(id, createCreditDto);
  }

  @Get()
  findAll() {
    return this.creditService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creditService.findOne(id);
  }

  @Get('user/:id')
  findUsersAll(@Param('id') id: string) { 
    return this.creditService.findUsersAll(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UploadCreditDto: UploadCreditDto) {
    return this.creditService.update(id, UploadCreditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditService.remove(id);
  }
}
