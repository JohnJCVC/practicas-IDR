import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncuestaModule } from './encuesta/encuesta.module';
import { PreguntaModule } from './pregunta/pregunta.module';
import { InsumoEncuestaModule } from './insumo-encuesta/insumo-encuesta.module';



@Module({
  imports: [
    EncuestaModule,
    PreguntaModule,
    InsumoEncuestaModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: envs.databaseUrl,
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
