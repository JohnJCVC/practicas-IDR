import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateConceptoInversionInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  concepto: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  detalle: string;
}
