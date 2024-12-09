import { Module } from '@nestjs/common';
import { InsumoEncuestaService } from './insumo-encuesta.service';
import { InsumoEncuestaResolver } from './insumo-encuesta.resolver';

@Module({
  imports: [ TypeOrmModule.forFeature([InsumoDeEncuesta])],
  exports: [ TypeOrmModule ],
  providers: [InsumoEncuestaResolver, InsumoEncuestaService],
})
export class InsumoEncuestaModule {}
