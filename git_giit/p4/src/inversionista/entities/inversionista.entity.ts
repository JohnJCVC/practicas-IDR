import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Inversionista extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  identificacion: string;
}

export const InversionistaSchema = SchemaFactory.createForClass(Inversionista);
