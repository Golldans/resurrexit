import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [PresentationModule, DomainModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
