import { Injectable } from '@nestjs/common';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';
import { Balance } from './entities/balance.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(Balance)
    private balanceRepository: Repository<Balance>,
  ) {}

  async create(createBalanceDto: CreateBalanceDto): Promise<Balance> {
    const newBalance = this.balanceRepository.create(createBalanceDto);
    return await this.balanceRepository.save(newBalance);
  }

  async findAll(): Promise<Balance[]> {
    return await this.balanceRepository.find();
  }

  async findOne(id: string): Promise<Balance | null> {
    return await this.balanceRepository.findOneBy({ id });
  }

  async update(id: string, updateBalanceDto: UpdateBalanceDto): Promise<Balance | null> {
    const balance = await this.balanceRepository.findOneBy({ id });
    if (!balance) {
      return null;
    }

    // Actualización parcial utilizando TypeORM
    await this.balanceRepository.update(id, updateBalanceDto);

    return await this.balanceRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.balanceRepository.delete(id);
  }
}
