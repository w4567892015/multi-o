import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from '@libs/user';

@Module({
  imports: [UserModule],
  controllers: [AppController],
})
export class AppModule {}
