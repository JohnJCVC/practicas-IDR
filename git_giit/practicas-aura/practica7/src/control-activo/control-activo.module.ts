import { Module } from '@nestjs/common';
import { ControlActivoService } from './control-activo.service';
import { ControlActivoResolver } from './control-activo.resolver';

@Module({
  providers: [ControlActivoResolver, ControlActivoService],
})
export class ControlActivoModule {}
