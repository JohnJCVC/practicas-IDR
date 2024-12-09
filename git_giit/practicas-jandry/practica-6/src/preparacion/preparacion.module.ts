import { Module } from '@nestjs/common';
import { PreparacionService } from './preparacion.service';
import { PreparacionController } from './preparacion.controller';
import { Preparacion } from './entities/preparacion.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Preparacion])],
  exports: [ TypeOrmModule ],
  controllers: [PreparacionController],
  providers: [PreparacionService],
})
export class PreparacionModule {}
