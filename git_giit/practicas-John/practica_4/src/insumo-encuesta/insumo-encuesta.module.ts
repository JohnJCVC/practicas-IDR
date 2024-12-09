import { Module } from '@nestjs/common';
import { InsumoEncuestaService } from './insumo-encuesta.service';
import { InsumoEncuestaGateway } from './insumo-encuesta.gateway';

@Module({
  imports: [ TypeOrmModule.forFeature([InsumoDeEncuesta])],
  exports: [ TypeOrmModule ],
  providers: [InsumoEncuestaGateway, InsumoEncuestaService],
})
export class InsumoEncuestaModule {}
