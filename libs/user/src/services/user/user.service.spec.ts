// UserService.test.ts

import { UserService } from './user.service';
import { UserRepository } from '../../repositorys/user/user.repository';

describe('UserService', () => {
  let service: UserService;
  let repository: UserRepository;

  beforeEach(() => {
    repository = new UserRepository();
    service = new UserService(repository);
  });

  describe('findAll', () => {
    it('should return a list of users', async () => {
      const users = await service.findAll();
      expect(users).toBeDefined();
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const input = { id: '1' };
      const user = await service.findOne(input);
      expect(user).toBeDefined();
    });
  });
});
