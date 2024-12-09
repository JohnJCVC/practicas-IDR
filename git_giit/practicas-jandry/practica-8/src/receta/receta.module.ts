import { Module } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { RecetaGateway } from './receta.gateway';

@Module({
  imports: [ TypeOrmModule.forFeature([Receta])],
  exports: [ TypeOrmModule ],
  providers: [RecetaGateway, RecetaService],
})
export class RecetaModule {}
