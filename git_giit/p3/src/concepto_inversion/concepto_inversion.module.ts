import { Module } from '@nestjs/common';
import { ConceptoInversionService } from './concepto_inversion.service';
import { ConceptoInversionResolver } from './concepto_inversion.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoInversion, ConceptoInversionSchema } from './entities/concepto_inversion.entity';

@Module({
  imports: [ MongooseModule.forFeature([
    { name: ConceptoInversion.name, schema: ConceptoInversionSchema }])],
  exports: [],
  providers: [ConceptoInversionResolver, ConceptoInversionService],
})
export class ConceptoInversionModule {}
