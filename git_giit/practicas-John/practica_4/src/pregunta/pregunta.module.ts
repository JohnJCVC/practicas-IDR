import { Module } from '@nestjs/common';
import { PreguntaService } from './pregunta.service';
import { PreguntaGateway } from './pregunta.gateway';

@Module({
  imports: [ TypeOrmModule.forFeature([Pregunta])],
  exports: [ TypeOrmModule ],
  providers: [PreguntaGateway, PreguntaService],
})
export class PreguntaModule {}
