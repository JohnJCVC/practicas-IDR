import { Module } from '@nestjs/common';
import { ControlGateway } from './control.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { ControlActivoService } from './control.service';
import { ControlDeActivo, ControlDeActivoSchema } from './entities/control.entity';

@Module({
  imports : [  MongooseModule.forFeature([ {name: ControlDeActivo.name, schema: ControlDeActivoSchema } ]) ],
  exports : [ MongooseModule ],
  providers: [ControlGateway, ControlActivoService],
})
export class ControlModule {}
