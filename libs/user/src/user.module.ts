import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { UserRepository } from './repositorys/user/user.repository';

@Module({
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
