import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { UserModule, UserService } from '@libs/user';

describe('AppController', () => {
  let appController: AppController;
  let userService: UserService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
    userService = app.get<UserService>(UserService);
  });

  describe('getAll', () => {
    it('should return a list of users with the given role', async () => {
      const mockUserData = {
        id: '1',
        firstName: 'Bob',
        lastName: '123',
        password: '123',
        role: 'admin',
      };
      jest.spyOn(userService, 'findAll').mockResolvedValue([mockUserData]);

      const queryRole = 'admin';
      const result = await appController.findAll(queryRole);

      const expectedResult = [
        {
          ...mockUserData,
          fullName: `${mockUserData.firstName} ${mockUserData.lastName}`,
        },
      ];
      expect(result).toEqual(expectedResult);
    });
  });

  describe('getOne', () => {
    it('should return a single user with the given id and role', async () => {
      const mockUserData = {
        id: '1',
        firstName: 'Bob',
        lastName: '123',
        password: '123',
        role: 'admin',
      };
      jest.spyOn(userService, 'findOne').mockResolvedValue(mockUserData);

      const queryId = '1';
      const queryRole = 'admin';
      const result = await appController.findOne(queryId, queryRole);

      const expectedResult = {
        ...mockUserData,
        fullName: `${mockUserData.firstName} ${mockUserData.lastName}`,
      };
      expect(result).toEqual(expectedResult);
    });
  });
});
