import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateInsumoEncuestaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
