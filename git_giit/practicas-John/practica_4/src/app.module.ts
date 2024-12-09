import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsumoEncuestaModule } from './insumo-encuesta/insumo-encuesta.module';
import { PreguntaModule } from './pregunta/pregunta.module';
import { EncuestaModule } from './encuesta/encuesta.module';
import { InsumoEncuestaModule } from './insumo-encuesta/insumo-encuesta.module';

@Module({
  imports: [InsumoEncuestaModule, EncuestaModule, PreguntaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
