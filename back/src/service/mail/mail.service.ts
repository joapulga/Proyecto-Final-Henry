import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private emailService: MailerService) {}
    
    async buildEmail(email:string , subject:string, body:string){
        await this.emailService.sendMail(
            {
                to: email,
                from: 'henry@softdesarrolladores.com', 
                subject: subject,
                html: body
            })
            .then( (success) => {
                console.log(success)
            }).catch((error) => {
                console.log(error)
            })
    }
}
