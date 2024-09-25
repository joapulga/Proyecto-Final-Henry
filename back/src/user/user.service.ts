import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UploadFileDto } from 'src/file-upload/dto/upload-file.dto';
import { FileUploadService } from 'src/file-upload/file-upload.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity'; // Assuming you have a User entity defined
import { Repository } from 'typeorm';



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
  await this.userRepository.save(user);
  return user;
}

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id});
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
}

