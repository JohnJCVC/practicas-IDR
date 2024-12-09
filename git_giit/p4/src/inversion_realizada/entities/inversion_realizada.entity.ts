import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class InversionRealizada extends Document {
 
  @Prop({ type: Types.ObjectId, ref: 'Inversionista', required: true })
  idInversionista: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Consepto', required: true })
  idConcepto: Types.ObjectId;

  @Prop({ required: true })
  valorInversion: number;

  @Prop({ required: true })
  fecha: Date;

  @Prop({ required: true })
  duracionEnDias: number;
}

export const InversionRealizadaSchema = SchemaFactory.createForClass(InversionRealizada);
