import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/domain/models/user.model';
import { GetUser } from 'src/domain/usecases/user/get';
import { SaveUser } from 'src/domain/usecases/user/save';

@Controller('user')
export class UserController {
  constructor(
    private readonly saveUser: SaveUser,
    private readonly getUser: GetUser,
  ) {}

  @Post('/save')
  async save(@Body() user: User) {
    return await this.saveUser.call(user);
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return await this.getUser.call(id);
  }
}
