import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ConceptoInversion extends Document {
  @Prop({ required: true })
  concepto: string;

  @Prop({ required: true })
  detalle: string;
}

export const ConceptoInversionSchema = SchemaFactory.createForClass(ConceptoInversion);
