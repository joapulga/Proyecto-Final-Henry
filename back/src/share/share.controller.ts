import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShareService } from './share.service';
import { CreateShareDto } from './dto/create-share.dto';
<<<<<<< HEAD
import { UpdateShareDto } from './dto/update-share.dto';
=======
import { UploadShareDto } from './dto/update-share.dto';
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01

@Controller('share')
export class ShareController {
  constructor(private readonly shareService: ShareService) {}

  @Post()
  create(@Body() createShareDto: CreateShareDto) {
    return this.shareService.create(createShareDto);
  }

  @Get()
  findAll() {
    return this.shareService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shareService.findOne(id);
  }

  @Patch(':id')
<<<<<<< HEAD
  update(@Param('id') id: string, @Body() updateShareDto: UpdateShareDto) {
    return this.shareService.update(id, updateShareDto);
=======
  update(@Param('id') id: string, @Body() UploadShareDto: UploadShareDto) {
    return this.shareService.update(id, UploadShareDto);
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shareService.remove(id);
  }
}
