import { Controller, Get, BadRequestException, Post, Body, Patch, Param, Delete, Headers, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';

// import { AuthGuard } from 'src/guards/auth.guard';

import { CreateUserDto } from './dto/create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
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
  async findLoggedUser(@Req() request: Request){
    const request1 = request.headers['authorization']
    const token = request1.split(' ')[1]
    let payload = await this.jwtService.decode(token)
    console.log(request)
    return payload
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
  createAdmin(@Param('id')id:string){
    return this.userService.becomeAdmin(id);
  }

  @Get('protected')
  async getAuth0Protected(@Req() request: Request) {
    // Almacenar los datos del usuario en variables
    const email = request.oidc.user.email;    
    const name = request.oidc.user.nickname;  
    const surname = request.oidc.user.family_name;  
  

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

}
