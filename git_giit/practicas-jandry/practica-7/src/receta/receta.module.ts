import { Module } from '@nestjs/common';
import { RecetaService } from './receta.service';
import { RecetaResolver } from './receta.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './entities/receta.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Receta])],
  exports: [ TypeOrmModule ],
  providers: [RecetaResolver, RecetaService],
})
export class RecetaModule {}
