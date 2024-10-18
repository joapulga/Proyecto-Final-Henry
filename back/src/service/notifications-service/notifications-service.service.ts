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
    @Cron(CronExpression.MONDAY_TO_FRIDAY_AT_2PM)
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
        for(let email of emails){
            await this.mailService.buildEmail(email, `Notificación de vencimiento`, `Le recordamos que su cuota esta próxima a vencer, realice el pago`)
        }
    }

    @Cron(CronExpression.EVERY_DAY_AT_6PM)
    async handleCron1(){
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
        for(let email of emails){
            await this.mailService.buildEmail(email, `Notificación de vencimiento`, `Le recordamos que su cuota esta próxima a vencer, realice el pago`)
        }
    }
}
