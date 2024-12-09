import { Test, TestingModule } from '@nestjs/testing';
import { ActivoGateway } from './activo.gateway';
import { ActivoService } from './activo.service';

describe('ActivoGateway', () => {
  let gateway: ActivoGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivoGateway, ActivoService],
    }).compile();

    gateway = module.get<ActivoGateway>(ActivoGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
