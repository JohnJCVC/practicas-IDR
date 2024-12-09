import { Module } from '@nestjs/common';
import { ActivoModule } from './activo/activo.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { ControlActivoModule } from './control-activo/control-activo.module';

@Module({
  imports: [ActivoModule, DepartamentoModule, ControlActivoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
