import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsServiceService } from './notifications-service.service';

describe('NotificationsServiceService', () => {
  let service: NotificationsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsServiceService],
    }).compile();

    service = module.get<NotificationsServiceService>(NotificationsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
