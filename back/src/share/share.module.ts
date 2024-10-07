import { Module } from '@nestjs/common';
import { ShareService } from './share.service';
import { ShareController } from './share.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Share } from './entities/share.entity';
import { State } from 'src/state/entities/state.entity';
import { StatesService } from 'src/state/states.service';

@Module({
  imports: [
    // FileUploadModule,
     TypeOrmModule.forFeature([Share, State])//importar la entidad User 
 ],
  controllers: [ShareController],
  providers: [ShareService, StatesService],
})
export class ShareModule {}
