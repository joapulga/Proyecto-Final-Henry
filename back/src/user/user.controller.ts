import {
  Controller,
  Get,
  BadRequestException,
  Post,
  Put,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  Req,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';
import { CloudinaryService } from 'src/service/cloudinary/cloudinary.service';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Put('updateUser/:id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // Buscar el usuario
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    // Actualizar el usuario con los nuevos datos
    return await this.userService.update(id, updateUserDto);
  }

  //@ApiBearerAuth()
  @Get()
  //@UseGuards(AuthGuard)
  findAll() {
    return this.userService.findAll();
  }

  //@ApiBearerAuth()
  @Get('dashboard')
  //@UseGuards(AuthGuard)
  async findLoggedUser(@Req() request: Request) {
    const request1 = request.headers['authorization'];
    const token = request1.split(' ')[1];
    let payload = await this.jwtService.decode(token);
    const user = await this.userService.findOne(payload.id);

    delete user.password;

    return user;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Post(':id/becomeAdmin')
  createAdmin(@Param('id') id: string) {
    return this.userService.becomeAdmin(id);
  }

  // @Get('protected')
  // async getAuth0Protected(@Req() request: Request) {
  //   // Almacenar los datos del usuario en variables
  //   const email = request.oidc.user.email;
  //   const name = request.oidc.user.nickname;
  //   const surname = request.oidc.user.family_name;

  //   // Imprimir datos en la consola
  //   console.log('OIDC Info:', JSON.stringify(request.oidc));
  //   console.log('ID Token:', JSON.stringify(request.oidc.idToken));
  //   console.log('Usuario:', name, surname, email);

  //   // Retornar el usuario como respuesta
  //   return JSON.stringify(request.oidc.user);
  // }

  @Post('update-photo/:id')
  @UseInterceptors(FileInterceptor('file'))
  async updatePhoto(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('INFORMACION DE LA FOTO', file);
    const url = await this.cloudinaryService.uploadFile(
      file.buffer,
      file.originalname,
    );
    const user = await this.userService.findOne(id);
    user.img_url = url;

    console.log('ESTE ES EL USUARIO ', user);
    this.userService.saveUser(user);

    return url;
  }
}
