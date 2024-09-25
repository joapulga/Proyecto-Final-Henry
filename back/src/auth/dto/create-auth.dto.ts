<<<<<<< HEAD
import { PickType } from "@nestjs/mapped-types";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateAuthDto extends PickType(CreateUserDto,
    [
        'email',
        'password'
    ]
){}
=======

import { PickType } from "@nestjs/swagger";
import { CreateUserDto } from "../../user/dto/create-user.dto";

export class CreateAuthDto extends PickType(CreateUserDto, 
    [
        'email', 
        'password',

    ]) {}
>>>>>>> 7c256ddaf63da8759abbb0a84fb65f9e7d658f01
