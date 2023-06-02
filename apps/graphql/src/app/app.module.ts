import { Module } from '@nestjs/common';

import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';

@Module({
  providers: [AppResolver, AppService, AppRepository],
})
export class AppModule {}
