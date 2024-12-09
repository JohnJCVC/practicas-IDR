import { CreateConceptoInversionInput } from './create-concepto_inversion.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { ObjectId, Types } from 'mongoose'

@InputType()
export class UpdateConceptoInversionInput extends PartialType(CreateConceptoInversionInput) {
  @Field(() => ID)
  id: Types.ObjectId;
}
