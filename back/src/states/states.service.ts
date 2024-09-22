import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { State } from './entities/state.entity'; // Assuming you have a State entity
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(State)
    private readonly statesRepository: Repository<State>,  //poner dentro de Repository el nombre de la entidad state correspondiente
  ) {}

  async create(createStateDto: CreateStateDto): Promise<State> {
    const state = this.statesRepository.create(createStateDto);
    return await this.statesRepository.save(state);
  }

  async findAll(): Promise<State[]> {
    return await this.statesRepository.find();
  }
  async findOne(id: string): Promise<State | null> {
    return await this.statesRepository.findOneBy({ id });
  }

  async update(id: string, updateStateDto: UpdateStateDto): Promise<State | null> {
    const state = await this.statesRepository.findOneBy({ id });
    if (!state) {
      return null; // Or throw an error if you prefer
    }

    Object.assign(state, updateStateDto);
    return await this.statesRepository.save(state);
  }

  async remove(id: string): Promise<void> {
    await this.statesRepository.delete({ id });
  }
}
