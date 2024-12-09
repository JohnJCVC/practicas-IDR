import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType()
@Schema()
export class Inversionista extends Document {
  // @Field(() => ID)
  // @Prop() 
  // _id: Types.ObjectId;

  @Field()
  @Prop({ required: true }) 
  nombre: string;

  @Field()
  @Prop({ required: true }) 
  identificacion: string;
}

export const InversionistaSchema = SchemaFactory.createForClass(Inversionista);
