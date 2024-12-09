import { Module } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { EncuestaGateway } from './encuesta.gateway';

@Module({
  imports: [ TypeOrmModule.forFeature([Encuesta])],
  exports: [ TypeOrmModule ],
  providers: [EncuestaGateway, EncuestaService],
})
export class EncuestaModule {}
