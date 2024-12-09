import { Module } from '@nestjs/common';
import { ControlRealizadoService } from './control-realizado.service';
import { ControlRealizadoGateway } from './control-realizado.gateway';

@Module({
  providers: [ControlRealizadoGateway, ControlRealizadoService],
})
export class ControlRealizadoModule {}
