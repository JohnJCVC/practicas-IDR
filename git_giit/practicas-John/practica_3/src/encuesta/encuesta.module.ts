import { Module } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { EncuestaResolver } from './encuesta.resolver';

@Module({
  imports: [ TypeOrmModule.forFeature([Encuesta])],
  exports: [ TypeOrmModule ],
  providers: [EncuestaResolver, EncuestaService],
})
export class EncuestaModule {}
