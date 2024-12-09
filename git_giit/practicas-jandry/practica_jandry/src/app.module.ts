import { Module } from '@nestjs/common';
import { RecetaModule } from './receta/receta.module';
import { PreparacionModule } from './preparacion/preparacion.module';
import { CocineroModule } from './cocinero/cocinero.module';

@Module({
  imports: [ RecetaModule, PreparacionModule, CocineroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
