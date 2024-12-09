import { Module } from '@nestjs/common';
import { CocineroService } from './cocinero.service';
import { CocineroResolver } from './cocinero.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cocinero } from './entities/cocinero.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Cocinero])],
  exports: [ TypeOrmModule ],
  providers: [CocineroResolver, CocineroService],
})
export class CocineroModule {}
