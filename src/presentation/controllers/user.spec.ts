import { Test, TestingModule } from '@nestjs/testing';
import { GetUser } from 'src/domain/usecases/user/get';
import { ListUsers } from 'src/domain/usecases/user/list';
import { SaveUser } from 'src/domain/usecases/user/save';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserController, SaveUser, GetUser, ListUsers],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
