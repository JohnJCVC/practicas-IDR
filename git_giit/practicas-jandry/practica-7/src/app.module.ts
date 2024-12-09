import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocineroModule } from './cocinero/cocinero.module';
import { RecetaModule } from './receta/receta.module';
import { PreparacionModule } from './preparacion/preparacion.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    RecetaModule,
    PreparacionModule,
    CocineroModule,
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