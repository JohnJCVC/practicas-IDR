import { Field, ID, ObjectType } from '@nestjs/graphql'; 
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { Document, Types } from 'mongoose'; 

@ObjectType() 
@Schema() 
export class ConceptoInversion extends Document {
  // @Field(() => ID) 
  // @Prop() 
  // _id: Types.ObjectId; 

  @Field() 
  @Prop({ required: true })  
  concepto: string;

  @Field() 
  @Prop({ required: true })  
  detalle: string;
}

export const ConceptoInversionSchema = SchemaFactory.createForClass(ConceptoInversion);
