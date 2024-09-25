import { Injectable, NotFoundException } from '@nestjs/common';
<<<<<<< HEAD
import { CreditCreateDto } from './dto/create-credit.dto';
import { CreditUpdateDto } from './dto/update-credit.dto';
=======
import { CreateCreditDto } from './dto/create-credit.dto';
import { UploadCreditDto } from './dto/update-credit.dto';
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
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

<<<<<<< HEAD
  async create(createCreditDto: CreditCreateDto) {
    const credit = new Credit();
    Object.assign(credit, createCreditDto); 
    const creditCreated = await this.creditRepository.save(credit);
    console.log(creditCreated);
    return creditCreated;
=======
  async create(createCreditDto: CreateCreditDto): Promise<Credit> {
 
    const credit = await this.creditRepository.create(createCreditDto);
    //Object.assign(credit, createCreditDto);
    console.log("este es le credito", credit);
    return await this.creditRepository.save(credit);
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
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

<<<<<<< HEAD
  async update(id: string, updateCreditDto: CreditUpdateDto): Promise<Credit> {
=======
  async update(id: string, updateCreditDto: UploadCreditDto): Promise<Credit> {
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
    const credit = await this.findOne(id);
    Object.assign(credit, updateCreditDto);
    return await this.creditRepository.save(credit);
  }

  async remove(id: string): Promise<void> {
    const credit = await this.findOne(id);
    await this.creditRepository.remove(credit);
  }
}
