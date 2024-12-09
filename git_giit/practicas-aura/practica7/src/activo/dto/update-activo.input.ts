import { CreateActivoInput } from './create-activo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateActivoInput extends PartialType(CreateActivoInput) {
  @Field(() => Int)
  id: number;
}
