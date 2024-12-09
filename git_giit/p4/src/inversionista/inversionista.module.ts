import { Module } from '@nestjs/common';
import { InversionistaService } from './inversionista.service';
import { InversionistaGateway } from './inversionista.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Inversionista, InversionistaSchema } from './entities/inversionista.entity';

@Module({
  imports: [ MongooseModule.forFeature([
    { name: Inversionista.name, schema: InversionistaSchema }])],
  providers: [InversionistaGateway, InversionistaService],
})
export class InversionistaModule {}
