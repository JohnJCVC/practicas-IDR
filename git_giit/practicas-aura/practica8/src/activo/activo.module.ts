import { Module } from '@nestjs/common';
import { ActivoService } from './activo.service';
import { ActivoGateway } from './activo.gateway';

@Module({
  providers: [ActivoGateway, ActivoService],
})
export class ActivoModule {}
