<<<<<<< HEAD
//import { PartialType } from '@nestjs/mapped-types';
//import { UploadFileDto } from './upload-file.dto';

//export class UpdateFileUploadDto extends PartialType() {}
=======
import { PartialType } from '@nestjs/mapped-types';
import { CreateFileUploadDto } from './create-file-upload.dto';

export class UpdateFileUploadDto extends PartialType(CreateFileUploadDto) {}
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
