import { Module } from '@nestjs/common';
import { InversionistaModule } from './inversionista/inversionista.module';
import { ConceptoInversionModule } from './concepto_inversion/concepto_inversion.module';
import { InversionRealizadaModule } from './inversion_realizada/inversion_realizada.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

@Module({
  imports: [
    InversionistaModule,
    ConceptoInversionModule,
    InversionRealizadaModule,
    MongooseModule.forRoot(
      process.env.URL_DATABASE,
      {}
    ),

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
