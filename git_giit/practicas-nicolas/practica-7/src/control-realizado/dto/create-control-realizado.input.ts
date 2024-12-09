import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateControlRealizadoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
