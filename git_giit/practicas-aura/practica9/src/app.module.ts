import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Activo, ActivoSchema } from './activo/entities/activo.entity';
import { Departamento, DepartamentoSchema } from './departamento/entities/departamento.entity';
import { ControlDeActivo, ControlDeActivoSchema } from './control_activo/entities/control_activo.entity';

@Module({
  imports: [
    // MongooseModule.forRoot(''),
    // MongooseModule.forFeature([
    //   { name: Activo.name, schema: ActivoSchema },
    //   { name: Departamento.name, schema: DepartamentoSchema },
    //   { name: ControlDeActivo.name, schema: ControlDeActivoSchema },
    // ]),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
