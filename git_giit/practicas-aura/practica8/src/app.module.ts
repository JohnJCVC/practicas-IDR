import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivoModule } from './activo/activo.module';
import { ControlModule } from './control/control.module';
import { DepartamentoModule } from './departamento/departamento.module';

@Module({
  imports: [ActivoModule, ControlModule, DepartamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
