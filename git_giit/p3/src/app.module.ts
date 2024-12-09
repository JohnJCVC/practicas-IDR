import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { InversionistaModule } from './inversionista/inversionista.module';
import { ConceptoInversionModule } from './concepto_inversion/concepto_inversion.module';
import { InversionRealizadaModule } from './inversion_realizada/inversion_realizada.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import * as dotenv from 'dotenv'
dotenv.config();

@Module({
  imports: [
    InversionistaModule,
    ConceptoInversionModule,
    InversionRealizadaModule,

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),

    MongooseModule.forRoot(
      process.env.URL_DATABASE,
      {}
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
