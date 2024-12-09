import { Module } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { EncuestaController } from './encuesta.controller';

@Module({
  imports: [ TypeOrmModule.forFeature([Encuesta])],
  exports: [ TypeOrmModule ],
  controllers: [EncuestaController],
  providers: [EncuestaService],
})
export class EncuestaModule {}
