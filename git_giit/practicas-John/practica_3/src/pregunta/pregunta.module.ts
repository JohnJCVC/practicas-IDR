import { Module } from '@nestjs/common';
import { PreguntaService } from './pregunta.service';
import { PreguntaResolver } from './pregunta.resolver';

@Module({
  imports: [ TypeOrmModule.forFeature([Pregunta])],
  exports: [ TypeOrmModule ],
  providers: [PreguntaResolver, PreguntaService],
})
export class PreguntaModule {}
