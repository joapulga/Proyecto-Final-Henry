import { Injectable } from '@nestjs/common';
import { CreateShareDto } from './dto/create-share.dto';
import { UploadShareDto } from './dto/update-share.dto';
import { Share } from './entities/share.entity'; //remplazar por la entidad correspondiente
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from 'src/state/entities/state.entity';
import { StatesService } from 'src/state/states.service';

@Injectable()
export class ShareService {
  constructor(
    @InjectRepository(Share)
    private readonly shareRepository: Repository<Share>, //por nombre de la entidad dentro de repository
    private readonly stateService: StatesService
  ) {}

  async create(createShareDto: CreateShareDto[]): Promise<Share> {
    let shares = await this.shareRepository.save(createShareDto);
    return shares[0]
  }

  async findAll(): Promise<Share[]> {
    return await this.shareRepository.find();
  }

  async findOne(id: string): Promise<Share | null> {
    return await this.shareRepository.findOneBy({ id });
  }

  async paidById(id: string): Promise<string> {
    const newState = await this.stateService.findOneByName('Paid')
    const oldShare = await this.shareRepository.findOneBy({id: id})
    const newShare = this.shareRepository.merge(oldShare, {
      ...oldShare, 
      state: newState,
      paid_date: new Date()
    })
    await this.shareRepository.save(newShare)
    return newShare.id
  }

  async update(id: string, UploadShareDto: UploadShareDto): Promise<Share | null> {
    const share = await this.findOne(id);
    if (!share) {
      return null; // Or throw an error if you prefer
    }
    Object.assign(share, UploadShareDto);
    return await this.shareRepository.save(share);
  }

  async remove(id: string): Promise<void> {
    const share = await this.findOne(id);
    if (share) {
      await this.shareRepository.remove(share);
    }
  }
}
