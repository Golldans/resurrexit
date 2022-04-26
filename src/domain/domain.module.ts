import { Module } from '@nestjs/common';
import { GetUser } from './usecases/user/get';
import { SaveUser } from './usecases/user/save';

@Module({
  providers: [GetUser, SaveUser],
  exports: [GetUser, SaveUser],
})
export class DomainModule {}
