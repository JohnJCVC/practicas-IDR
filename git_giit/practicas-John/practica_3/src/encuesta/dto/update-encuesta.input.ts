import { CreateEncuestaInput } from './create-encuesta.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEncuestaInput extends PartialType(CreateEncuestaInput) {
  @Field(() => Int)
  id: number;
}
