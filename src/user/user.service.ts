import { Injectable, Inject,Body, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize"
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User
  ) { }

  create(@Body() createUserDto: CreateUserDto) {
    console.log("user post")
    console.log(createUserDto)
    // this.userRepository.create({
    //   name: createUserDto.name,
    //   password: createUserDto.password,
    //   email: createUserDto.email,
    //   age: createUserDto.age
    // })
    // this.userRepository.create(createUserDto as any)
    return 'This action adds a new user';
  }

  // findAll() {
  //   return `This action returns all user`;
  // }
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  findOne(id: number) {
    const u = this.userRepository.findByPk(id);
    console.log("user",u)
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
