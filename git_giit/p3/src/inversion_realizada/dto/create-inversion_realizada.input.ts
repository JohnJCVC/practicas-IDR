import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsDate, IsInt, IsMongoId, IsNumber, Min } from 'class-validator';

@InputType()
export class CreateInversionRealizadaInput {
  @Field(() => ID)
  @IsMongoId()
  idInversionista: string;

  @Field(() => ID)
  @IsMongoId()  
  idConcepto: string;

  @Field()
  @IsNumber()  
  @Min(0)  
  valorInversion: number;

  @Field()
  @IsInt()
  @Min(1)
  duracionEnDias: number;

  @Field() 
  @IsDate()
  fecha: Date;
}