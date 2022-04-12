import { Test, TestingModule } from '@nestjs/testing';
import { InitDatabaseController } from './init-database.controller';

describe('InitDatabaseController', () => {
  let controller: InitDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitDatabaseController],
    }).compile();

    controller = module.get<InitDatabaseController>(InitDatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
