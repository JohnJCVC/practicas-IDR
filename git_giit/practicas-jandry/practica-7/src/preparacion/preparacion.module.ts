import { Module } from '@nestjs/common';
import { PreparacionService } from './preparacion.service';
import { PreparacionResolver } from './preparacion.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preparacion } from './entities/preparacion.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Preparacion])],
  exports: [ TypeOrmModule ],
  providers: [PreparacionResolver, PreparacionService],
})
export class PreparacionModule {}
