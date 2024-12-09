import { Module } from '@nestjs/common';
import { InsumoEncuestaService } from './insumo_encuesta.service';
import { InsumoEncuestaController } from './insumo_encuesta.controller';

@Module({
  controllers: [InsumoEncuestaController],
  providers: [InsumoEncuestaService],
})
export class InsumoEncuestaModule {}
