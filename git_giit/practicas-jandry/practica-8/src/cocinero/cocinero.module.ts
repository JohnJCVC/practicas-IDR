import { Module } from '@nestjs/common';
import { CocineroService } from './cocinero.service';
import { CocineroGateway } from './cocinero.gateway';

@Module({
  imports: [ TypeOrmModule.forFeature([Cocinero])],
  exports: [ TypeOrmModule ],
  providers: [CocineroGateway, CocineroService],
})
export class CocineroModule {}
