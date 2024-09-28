import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditController } from './credit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './entities/credit.entity';
import { StatesService } from 'src/state/states.service';
import { ShareService } from 'src/share/share.service';
import { State } from 'src/state/entities/state.entity';
import { Share } from 'src/share/entities/share.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    // FileUploadModule,
     TypeOrmModule.forFeature([Credit, State, Share, User])//importar la entidad User 
 ],
  controllers: [CreditController],
  providers: [CreditService, StatesService, ShareService, UserService],
})
export class CreditModule {}
