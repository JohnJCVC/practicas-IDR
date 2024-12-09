import { CreateInsumoEncuestaInput } from './create-insumo-encuesta.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateInsumoEncuestaInput extends PartialType(CreateInsumoEncuestaInput) {
  @Field(() => Int)
  id: number;
}
