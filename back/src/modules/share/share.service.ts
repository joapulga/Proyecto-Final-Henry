import { Injectable } from '@nestjs/common';
import { CreateShareDto } from './dto/create-share.dto';
import { UpdateShareDto } from './dto/update-share.dto';
import { Share } from './entities/share.entity'; //remplazar por la entidad correspondiente
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ShareService {
  constructor(
    @InjectRepository(Share)
    private readonly shareRepository: Repository<Share>, //por nombre de la entidad dentro de repository
  ) {}

  async create(createShareDto: CreateShareDto): Promise<Share> {
    const share = new Share();
    Object.assign(share, createShareDto); // copia las propiedades de un objeto a otro
    return await this.shareRepository.save(share);
  }

  async findAll(): Promise<Share[]> {
    return await this.shareRepository.find();
  }

  async findOne(id: string): Promise<Share | null> {
    return await this.shareRepository.findOneBy({ id });
  }

  async update(id: string, updateShareDto: UpdateShareDto): Promise<Share | null> {
    const share = await this.findOne(id);
    if (!share) {
      return null; // Or throw an error if you prefer
    }
    Object.assign(share, updateShareDto);
    return await this.shareRepository.save(share);
  }

  async remove(id: string): Promise<void> {
    const share = await this.findOne(id);
    if (share) {
      await this.shareRepository.remove(share);
    }
  }
}
