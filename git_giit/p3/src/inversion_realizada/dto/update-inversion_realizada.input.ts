import { Types } from 'mongoose';
import { CreateInversionRealizadaInput } from './create-inversion_realizada.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateInversionRealizadaInput extends PartialType(CreateInversionRealizadaInput) {
  @Field(() => String)
  @IsString()
  id: string;
}
