import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UploadCreditDto } from './dto/update-credit.dto';
import { Credit } from './entities/credit.entity';
import   
 { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShareService } from 'src/share/share.service';
import { StatesService } from 'src/state/states.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CreditService {
  constructor(
    @InjectRepository(Credit)
    private readonly creditRepository: Repository<Credit>,
    private shareService: ShareService,
    private stateService: StatesService,
    private userService: UserService
  ) {}

  async generateShrae(credit: CreateCreditDto): Promise<{cap: number, int: number}>{
    const capital = credit.amount/credit.months
    const interest = credit.amount*credit.interest/100
    return new Promise( (resolve, reject) => {
      resolve({cap: parseFloat(capital.toFixed(2)), int: parseFloat(interest.toFixed(2))})
    })
  }

  async create(id: string, createCreditDto: CreateCreditDto): Promise<String> {
 
    const user = await this.userService.findOne(id)
    const state = await this.stateService.findOneByName('Active')

    if(!user){
      throw new BadRequestException("The user doesn't exist")
    }

    createCreditDto.user = user
    createCreditDto.state = state

    const credit = await this.creditRepository.create(createCreditDto);
    const varCredit = await this.generateShrae(createCreditDto)
    const date = new Date()
    let shares = []
    for (let i = 1; i <= createCreditDto.months; i++) {
      date.setMonth(date.getMonth() + 1)
        shares.push({
          number_share: i,
          expirate_date: new Date(date),
          paid_date: new Date(date),
          capital: varCredit.cap,
          interes: varCredit.int,
          amount: varCredit.cap + varCredit.int,
          credit: credit,
          state: state
        })
    }
    try {
      await this.creditRepository.save(credit)
      await this.shareService.create(shares)
    } catch (error) {
      await this.creditRepository.delete(credit)
      throw new BadRequestException('Error at generate the credit')
    }
    return credit.id
  }

  async findAll(): Promise<Credit[]> {
    return await this.creditRepository.find();
  }

  async findUsersAll(id: string){
    const user = await this.userService.findOne(id)
    if(!user){
      throw new BadRequestException("the users doesn't have credits")
    }
    return await this.creditRepository.findBy({user: user})
  }

  async findOne(id: string): Promise<Credit> {
    const credit = await this.creditRepository.findOne({
      where: {id: id},
      select: {state: {name: true}},
      relations: ['shares', 'state', 'shares.state'],
      order: {
        shares: {
          number_share: 'ASC'
        }
      }
    });
    if (!credit) {
      throw new NotFoundException(`Credit with ID ${id} not found`);
    }
    return credit;
  }

  async update(id: string, updateCreditDto: UploadCreditDto): Promise<Credit> {
    const credit = await this.findOne(id);
    Object.assign(credit, updateCreditDto);
    return await this.creditRepository.save(credit);
  }

  async remove(id: string): Promise<void> {
    const credit = await this.findOne(id);
    await this.creditRepository.remove(credit);
  }
}
