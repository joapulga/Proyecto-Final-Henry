import { Module } from '@nestjs/common';
import { ShareService } from './share.service';
import { ShareController } from './share.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Share } from './entities/share.entity';

<<<<<<< HEAD


@Module({
  imports: [
    TypeOrmModule.forFeature([Share])//importar la entidad Share
],
=======
@Module({
  imports: [
    // FileUploadModule,
     TypeOrmModule.forFeature([Share])//importar la entidad User 
 ],
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
  controllers: [ShareController],
  providers: [ShareService],
})
export class ShareModule {}
