import { Module } from '@nestjs/common';
import { DepartamentoService } from './departamento.service';
import { DepartamentoGateway } from './departamento.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Departamento, DepartamentoSchema } from './entities/departamento.entity';

@Module({
  imports : [  MongooseModule.forFeature([{ name: Departamento.name, schema: DepartamentoSchema}]) ],
  exports : [ MongooseModule ],
  providers: [DepartamentoGateway, DepartamentoService],
})
export class DepartamentoModule {}
