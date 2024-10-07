import { Module } from "@nestjs/common";
import { MailService } from "../mail/mail.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Credit } from "src/credit/entities/credit.entity";
import { NotificationsServiceService } from "./notifications-service.service";

@Module({
    imports: [TypeOrmModule.forFeature([Credit])],
    providers: [NotificationsServiceService, MailService]
})
export class NotificationsModule{}