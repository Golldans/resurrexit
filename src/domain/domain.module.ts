import { Module } from '@nestjs/common';
import { GetUser } from './usecases/user/get';
import { ListUsers } from './usecases/user/list';
import { SaveUser } from './usecases/user/save';

@Module({
  providers: [GetUser, ListUsers, SaveUser],
  exports: [GetUser, ListUsers, SaveUser],
})
export class DomainModule {}
