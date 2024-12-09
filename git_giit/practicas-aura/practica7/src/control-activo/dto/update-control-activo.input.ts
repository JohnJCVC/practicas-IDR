import { CreateControlActivoInput } from './create-control-activo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateControlActivoInput extends PartialType(CreateControlActivoInput) {
  @Field(() => Int)
  id: number;
}
