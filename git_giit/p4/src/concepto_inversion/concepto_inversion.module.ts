import { Module } from '@nestjs/common';
import { ConceptoInversionService } from './concepto_inversion.service';
import { ConceptoInversionGateway } from './concepto_inversion.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoInversion, ConceptoInversionSchema } from './entities/concepto_inversion.entity';

@Module({
  imports: [ MongooseModule.forFeature([
    { name: ConceptoInversion.name, schema: ConceptoInversionSchema  }
  ]) ],
  exports : [ MongooseModule ],
  providers: [ConceptoInversionGateway, ConceptoInversionService],
})
export class ConceptoInversionModule {}
