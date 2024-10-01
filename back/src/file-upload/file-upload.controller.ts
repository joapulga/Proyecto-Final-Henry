import { Controller, Get, Post, UploadedFile } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
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
