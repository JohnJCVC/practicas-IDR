import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ControlRealizado {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
