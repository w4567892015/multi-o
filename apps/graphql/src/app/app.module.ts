import { Module } from '@nestjs/common';

import { AppResolver } from './app.resolver';
import { UserModule } from '@libs/user';

@Module({
  imports: [UserModule],
  providers: [AppResolver],
})
export class AppModule {}
