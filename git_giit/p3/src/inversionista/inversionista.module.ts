import { Module } from '@nestjs/common';
import { InversionistaService } from './inversionista.service';
import { InversionistaResolver } from './inversionista.resolver';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Inversionista, InversionistaSchema } from './entities/inversionista.entity';

@Module({
  imports: [ MongooseModule.forFeature([
    { name: Inversionista.name , schema: InversionistaSchema}
  ]) ],
  providers: [InversionistaResolver, InversionistaService],
})
export class InversionistaModule {}
