import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { CreateUserDto } from "../user/dto/create-user.dto"
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import  * as bcrypt from "bcrypt"


import { MailerService } from "@nestjs-modules/mailer";
import { State } from "src/state/entities/state.entity";


@Injectable()
export class AuthRepository{

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(State) private stateRepository: Repository<State>,
        private readonly jwtService: JwtService,
        private emailService: MailerService
    ){}

    async singIn(createAuthDto: CreateAuthDto): Promise<Object>{
        const user = await this.userRepository.findOneBy({email: createAuthDto.email})
        if(user){
            const isValid = await bcrypt.compare(createAuthDto.password, user.password)
            if(isValid){
                await this.emailService.sendMail(
                    {
                        to: user.email,
                        from: 'henry@softdesarrolladores.com', 
                        subject: 'Access to Financial System',
                        text:  `You have accessed to your account at ${new Date()}`,
                        html: "<b>If you haven't accessed to your account changue your password and call us</b>"
                    })
                    .then( (success) => {
                        console.log(success)
                    }).catch((error) => {
                        console.log(error)
                    })
                const payload = {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    is_admin: user.is_admin
                }
                const JWT = this.jwtService.sign(payload)

                return {success: 'User login', token: JWT, is_admin: user.is_admin}


            }else{
                throw new BadRequestException('Bad Password or User 1')
            }
        }else{
            throw new BadRequestException('Bad Password or User 2')
        }
    }

    async singUp(createUserDto: CreateUserDto){

        try {
            const newState = await this.stateRepository.findOneBy({name: 'Active'})
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(createUserDto.password, salt)
            const newUser = {...createUserDto, password: hashPassword, state: newState}
            await this.userRepository.save(newUser)
            delete newUser.password
            return newUser
        } catch (error) { 
            console.log(error)
            throw new BadRequestException({message: 'Error al almacenar el usuario', error: error.driverError.detail})
        }

    }
}