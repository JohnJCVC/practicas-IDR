import { Field, ObjectType, ID } from '@nestjs/graphql'; 
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ConceptoInversion } from 'src/concepto_inversion/entities/concepto_inversion.entity';
import { Inversionista } from 'src/inversionista/entities/inversionista.entity';

@ObjectType()
@Schema()
export class InversionRealizada extends Document {
  // @Field(() => ID)
  // @Prop()
  // _id: Types.ObjectId;

  @Field(() => Inversionista)
  @Prop({ type: Types.ObjectId, ref: 'Inversionista', required: false })
  inversionista: Inversionista;  

  @Field(() => ConceptoInversion)
  @Prop({ type: Types.ObjectId, ref: 'ConceptoInversion', required: false })
  concepto: ConceptoInversion;  

  @Field()
  @Prop({ required: true })
  valorInversion: number;

  @Field()  
  @Prop({ required: true })
  duracionEnDias: number;

  @Field() 
  @Prop({ required: true })
  fecha: Date;
}

export const InversionRealizadaSchema = SchemaFactory.createForClass(InversionRealizada);
