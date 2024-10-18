import { Controller, Get, Post, UploadedFile, UseGuards } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('file-upload')
@ApiTags('File Upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post()
  async getUserImg(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    return this.fileUploadService.uploadFile({
      filedname: file.fieldname,
      originalname: file.originalname,
      mimetype: file.mimetype,
      buffer: file.buffer,
      size: file.size,
    });
  }
}
