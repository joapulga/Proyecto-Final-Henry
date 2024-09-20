import { Injectable, NotFoundException } from '@nestjs/common';
import { CreditCreateDto } from './dto/create-credit.dto';
import { CreditUpdateDto } from './dto/update-credit.dto';
import { Credit } from './entities/credit.entity';
import   
 { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CreditService {
  constructor(
    @InjectRepository(Credit)
    private readonly creditRepository: Repository<Credit>,
  ) {}

  async create(createCreditDto: CreditCreateDto): Promise<Credit> {
    const credit = new Credit();
    Object.assign(credit, createCreditDto);
    return await this.creditRepository.save(credit);
  }

  async findAll(): Promise<Credit[]> {
    return await this.creditRepository.find();
  }

  async findOne(id: string): Promise<Credit> {
    const credit = await this.creditRepository.findOneBy({ id });
    if (!credit) {
      throw new NotFoundException(`Credit with ID ${id} not found`);
    }
    return credit;
  }

  async update(id: string, updateCreditDto: CreditUpdateDto): Promise<Credit> {
    const credit = await this.findOne(id);
    Object.assign(credit, updateCreditDto);
    return await this.creditRepository.save(credit);
  }

  async remove(id: string): Promise<void> {
    const credit = await this.findOne(id);
    await this.creditRepository.remove(credit);
  }
}
