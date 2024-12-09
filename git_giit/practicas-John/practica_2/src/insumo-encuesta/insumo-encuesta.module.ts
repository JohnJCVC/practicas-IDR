import { Module } from '@nestjs/common';
import { InsumoEncuestaService } from './insumo-encuesta.service';
import { InsumoEncuestaController } from './insumo-encuesta.controller';

@Module({
  controllers: [InsumoEncuestaController],
  providers: [InsumoEncuestaService],
})
export class InsumoEncuestaModule {}
