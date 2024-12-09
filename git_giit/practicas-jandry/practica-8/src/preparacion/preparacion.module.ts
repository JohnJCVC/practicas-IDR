import { Module } from '@nestjs/common';
import { PreparacionService } from './preparacion.service';
import { PreparacionGateway } from './preparacion.gateway';

@Module({
  imports: [ TypeOrmModule.forFeature([Preparacion])],
  exports: [ TypeOrmModule ],
  providers: [PreparacionGateway, PreparacionService],
})
export class PreparacionModule {}
