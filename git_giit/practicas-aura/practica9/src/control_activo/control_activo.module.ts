import { Module } from '@nestjs/common';
import { ControlActivoService } from './control_activo.service';
import { ControlActivoController } from './control_activo.controller';

@Module({
  controllers: [ControlActivoController],
  providers: [ControlActivoService],
})
export class ControlActivoModule {}
