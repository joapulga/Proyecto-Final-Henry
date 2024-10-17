import { PickType } from "@nestjs/swagger";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateAuth0Dto extends PickType(CreateUserDto, [
  'name',
  'lastname',
  'email',
]){}