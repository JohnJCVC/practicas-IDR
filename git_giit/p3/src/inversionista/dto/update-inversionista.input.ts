import { Types } from 'mongoose';
import { CreateInversionistaInput } from './create-inversionista.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateInversionistaInput extends PartialType(CreateInversionistaInput) {
  @Field(() => ID)
  id: Types.ObjectId;
}
