import { Module } from '@nestjs/common';
import { InversionRealizadaService } from './inversion_realizada.service';
import { InversionRealizadaResolver } from './inversion_realizada.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { InversionRealizada, InversionRealizadaSchema } from './entities/inversion_realizada.entity';
import { ConceptoInversion, ConceptoInversionSchema } from 'src/concepto_inversion/entities/concepto_inversion.entity';
import { Inversionista, InversionistaSchema } from 'src/inversionista/entities/inversionista.entity';

@Module({
  imports: [ MongooseModule.forFeature([
    { name: InversionRealizada.name, schema: InversionRealizadaSchema },
    { name: ConceptoInversion.name, schema: ConceptoInversionSchema },
    { name: Inversionista.name, schema: InversionistaSchema }
  ]) ],
  providers: [InversionRealizadaResolver, InversionRealizadaService],
})
export class InversionRealizadaModule {}
