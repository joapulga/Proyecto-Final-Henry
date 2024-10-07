import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditService } from 'src/credit/credit.service';
import { Credit } from 'src/credit/entities/credit.entity';
import { Repository } from 'typeorm';
import { MailService } from '../mail/mail.service';

@Injectable()
export class NotificationsServiceService {

    constructor(
        @InjectRepository(Credit) private readonly creditRepository: Repository<Credit>,
        private readonly mailService: MailService
    ){}
    @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_10AM)
    async handleCron(){
        let emails: string[]
        const credits = await this.creditRepository.find({
            where: {state: {
                name: 'Active'
            }},
            select: {
                user: {
                    email: true
                }
            },
            relations: {
                user: true
            }
        })
        emails = credits.map( credit => {
            return credit.user.email
        })
        console.log(emails);
        for(let email of emails){
            await this.mailService.buildEmail(email, 'TEST MASIVO', 'Este es un test masivo')
        }
        console.log('CRON EJECTED');
    }
}
