import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateInversionistaInput {

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  readonly nombre: string;
  
  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  readonly identificacion: string;;
}
