import { Module } from '@nestjs/common';
import { EncuestaModule } from './encuesta/encuesta.module';
import { PreguntaModule } from './pregunta/pregunta.module';
import { InsumoEncuestaModule } from './insumo_encuesta/insumo_encuesta.module';

@Module({
  imports: [EncuestaModule, PreguntaModule, InsumoEncuestaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
