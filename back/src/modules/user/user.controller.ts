import { Controller, Get, Post, Body, Patch, BadRequestException, UseInterceptors, Param, Delete, UploadedFile, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';


@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('protected')
  async getAuth0Protected(@Req() request: Request) {
    // Almacenar los datos del usuario en variables
    const email = request.oidc.user.email;    
    const name = request.oidc.user.nickname; 
    const surname = request.oidc.user.family_name;  
  
    this.userService.createUserFromAuthData(name, email, surname );
    // Imprimir datos en la consola
    console.log('OIDC Info:', JSON.stringify(request.oidc));
    console.log('ID Token:', JSON.stringify(request.oidc.idToken));
    console.log('Usuario:', name, surname, email);

    // Retornar el usuario como respuesta
    return JSON.stringify(request.oidc.user);
  }


  @Post('update-photo/:id')
  async updatePhoto(@Param('id') id: string, @Body('newImg') newImg: string) {
    try {
      const updatedUser = await this.userService.updatePhoto(id, newImg);
      return updatedUser;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error; // Re-throw BadRequestExceptions for specific handling
      } else {
        console.error('Error updating photo:', error);
        throw new BadRequestException('An error occurred while updating the photo');
      }
    }
  }

  @Post(':id/becomeAdmin')
  createAdmin(@Param('id')id:string){
    return this.userService.becomeAdmin(id);
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



  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ){
    return await this.userService.uploadFile(file, id);
  }
  
}
