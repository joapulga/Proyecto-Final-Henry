import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UploadFileDto } from 'src/file-upload/dto/upload-file.dto';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity'; // Assuming you have a User entity defined
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'; 
import { CreateUserDtoGoogle } from './dto/create-user-google';
const jwt = require('jsonwebtoken');

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
     private readonly fileUploadService: FileUploadService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    return newUser;
  }

async becomeAdmin(id: string){
  const user = await this.userRepository.findOneBy({id});
  user.is_admin=true;
  this.userRepository.save(user);
  return user;
}

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({id});
  }

  async updatePhoto(id: string, newImg: string){
    const user = await this.userRepository.findOneBy({id});
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    user.img_url=newImg;
    await this.userRepository.save(user);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({id });
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    Object.assign(user, updateUserDto);
    await this.userRepository.save(user);
    return user;
  }

  async remove(id: string) {
    const user = await this.userRepository.findOneBy({id});
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    await this.userRepository.delete(user);
    return `User with ID ${id} deleted`;
  }



  async uploadFile(file, id: string) {
     const url = await this.fileUploadService.uploadFile({
       filedname: file.filedname,
       buffer: file.buffer,
       originalname: file.originalname,
       mimetype: file.mimetype,
       size: file.size,
     });

     const user = await this.userRepository.findOneBy({ id });
     if (!user) {
       throw new Error(`User with id ${id} not found`);
     }
     user.img_url = url;
     await this.userRepository.save(user);
     return { imgUrl: url };
   }



   


   
   private generateRandomPassword(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    
    return password;
  }

  // Función para crear un usuario usando CreateUserDto
  async createUserFromAuthData(email: string, name: string, surname: string) {
    const userDto = new CreateUserDtoGoogle();

    // Use the provided data from Auth0
    userDto.name = name;
    userDto.lastName = surname;
    userDto.email = email;
  
    // Generate a secure random password
    userDto.password = this.generateRandomPassword(9); // Use a strong password generation library
  
    // Set default values for optional fields
    userDto.dni = '45030774'; // Example, replace with logic for generating a valid DNI if needed
    userDto.phone = '321-456-7890'; // Example phone number, replace with logic to capture phone if available
    userDto.img_url = 'https://example.com/default-profile.png'; // Default image URL
    userDto.address = '123 Main St, Ciudad Ejemplo'; // Example address, replace with logic to capture address if available
  
    // Call your user creation service (assuming it's asynchronous)
    const userCreated = this.userRepository.save(userDto);
  
    if(!userCreated){
      return "ERROR AL GENERAR USUARIO";
    }
    console.log('Created user:', userDto); // Log the created user details
  
    return userDto;
  }


  extraerInformacionUsuario(accessToken) {
    try {
      const decoded = jwt.decode(accessToken, { complete: true });
      const { sub, name, email, roles } = decoded.payload; // Adapta los campos según tu configuración de Auth0
  
      // Aquí puedes procesar la información del usuario
      console.log('Usuario:', name);
      console.log('Email:', email);
      console.log('Roles:', roles);
  
      // Puedes devolver un objeto con la información extraída
      return {
        id: sub,
        nombre: name,
        correo: email,
        roles: roles
      };
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }
}













