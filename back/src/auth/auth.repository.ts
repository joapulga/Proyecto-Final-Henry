import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { CreateUserDto } from "../user/dto/create-user.dto"
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import  * as bcrypt from "bcrypt"
import { State } from "src/state/entities/state.entity";
import { MailService } from "src/service/mail/mail.service";
import { CreateAuth0Dto } from "./dto/auth0-auth.dto";


@Injectable()
export class AuthRepository{

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(State) private stateRepository: Repository<State>,
        private readonly jwtService: JwtService,
        private emailService: MailService
    ){}

    async singIn(createAuthDto: CreateAuthDto): Promise<Object>{
        try {
            const user = await this.userRepository.findOneBy({email: createAuthDto.email})
            if(user){
                const isValid = await bcrypt.compare(createAuthDto.password, user.password)
                if(isValid){
                    await this.emailService.buildEmail(
                        user.email, 
                        'Access to Financial System', 
                        "<b>If you haven't accessed to your account changue your password and call us</b>"
                    )
                    const payload = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        is_admin: user.is_admin
                    }
                    const JWT = this.jwtService.sign(payload)

                    return {success: 'User login', token: JWT, is_admin: user.is_admin}
                }else{
                    throw new BadRequestException('Contraseña o password incorrecto 1')
                }
            }else{
                throw new BadRequestException('Contraseña o password incorrecto')
            }
        } catch (error) {
            throw new BadRequestException('Contraseña o password incorrecto')
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
            throw new BadRequestException({message: 'Error al almacenar el usuario', error: error.driverError.detail})
        }

    }

    async auth0Login(createAuth0Dto: CreateAuth0Dto){
        const user = await this.userRepository.findOneBy({email: createAuth0Dto.email})
        if(user){
            await this.emailService.buildEmail(
                user.email, 
                'Access to Financial System', 
                "<b>If you haven't accessed to your account changue your password and call us</b>"
            )
            
            const payload = {
                id: user.id,
                email: user.email,
                name: user.name,
                is_admin: user.is_admin
            }
            const JWT = this.jwtService.sign(payload)

            return {success: 'User login', token: JWT, is_admin: user.is_admin}

        }else{
            try {
                const newState = await this.stateRepository.findOneBy({name: 'Active'})
                const newUser = {...createAuth0Dto, state: newState}
                await this.userRepository.save(newUser)
                const user = await this.userRepository.findOneBy({email: createAuth0Dto.email})
                if(user){
                    await this.emailService.buildEmail(
                        user.email, 
                        'Access to Financial System', 
                        "<b>If you haven't accessed to your account changue your password and call us</b>"
                    )
                    
                    const payload = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                        is_admin: user.is_admin
                    }
                    const JWT = this.jwtService.sign(payload)
        
                    return {success: 'User login', token: JWT, is_admin: user.is_admin}
                }else{
                    throw new BadRequestException({message: 'Error al almacenar el usuario'})
                }
            } catch (error) { 
                throw new BadRequestException({message: 'Error al almacenar el usuario', error: error.driverError.detail})
            }
        }
    }
}