import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { SignoVitalModule } from './signo-vital/signo-vital.module';
import { ControlRealizadoModule } from './control-realizado/control-realizado.module';

@Module({
  imports: [PacienteModule, SignoVitalModule, ControlRealizadoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
