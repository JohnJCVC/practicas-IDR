import { Module } from '@nestjs/common';
import { ActivoService } from './activo.service';
import { ActivoResolver } from './activo.resolver';

@Module({
  providers: [ActivoResolver, ActivoService],
})
export class ActivoModule {}
