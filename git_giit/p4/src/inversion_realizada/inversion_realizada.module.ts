import { Module } from '@nestjs/common';
import { InversionRealizadaService } from './inversion_realizada.service';
import { InversionRealizadaGateway } from './inversion_realizada.gateway';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { InversionRealizada, InversionRealizadaSchema } from './entities/inversion_realizada.entity';

@Module({
  imports: [ MongooseModule.forFeature([
    { name: InversionRealizada.name, schema: InversionRealizadaSchema }
  ]) ],
  exports : [ MongooseModule ],
  providers: [InversionRealizadaGateway, InversionRealizadaService],
})
export class InversionRealizadaModule {}
