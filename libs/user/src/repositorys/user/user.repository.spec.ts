import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository();
  });

  describe('list()', () => {
    it('should return an array of AccountAttributes', async () => {
      const result = await userRepository.list();
      expect(Array.isArray(result)).toBeTruthy();
    });

    it('should return two AccountAttributes', async () => {
      const result = await userRepository.list();
      expect(result.length).toBe(2);
    });
  });

  describe('findOne()', () => {
    it('should return an AccountAttribute', async () => {
      const result = await userRepository.findOne('1');
      expect(result).not.toBeUndefined();
    });

    it('should return AccountAttribute with id 1', async () => {
      const result = await userRepository.findOne('1');
      expect(result.id).toBe('1');
    });

    it('should return AccountAttribute with firstName John', async () => {
      const result = await userRepository.findOne('1');
      expect(result.firstName).toBe('John');
    });
  });
});
