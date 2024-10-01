import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';

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

  @ApiBearerAuth()
  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.userService.findAll();
  }

  @ApiBearerAuth()
  @Get('dashboard')
  @UseGuards(AuthGuard)
  async findLoggedUser(@Req() request: Request){
    const request1 = request.headers['authorization']
    const token = request1.split(' ')[1]
    let payload = await this.jwtService.decode(token)
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
}
