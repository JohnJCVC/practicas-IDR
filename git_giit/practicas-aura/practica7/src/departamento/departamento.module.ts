import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoResolver } from './departamento.resolver';

@Module({
  providers: [DepartamentoResolver, DepartamentoService],
})
export class DepartamentoModule {}
