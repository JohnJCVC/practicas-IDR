import { Module } from '@nestjs/common';
import { ControlRealizadoService } from './control-realizado.service';
import { ControlRealizadoResolver } from './control-realizado.resolver';

@Module({
  providers: [ControlRealizadoResolver, ControlRealizadoService],
})
export class ControlRealizadoModule {}
