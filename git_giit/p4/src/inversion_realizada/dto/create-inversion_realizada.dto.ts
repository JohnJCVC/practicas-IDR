import { IsNotEmpty, IsNumber, IsMongoId, IsDate, IsInt, Min } from 'class-validator';

export class CreateInversionRealizadaDto {
  @IsMongoId()
  @IsNotEmpty()
  idInversionista: string;
  
  @IsMongoId()
  @IsNotEmpty()
  idConcepto: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  valorInversion: number;

  @IsNotEmpty()
  fecha: Date; 

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  duracionEnDias: number;
}
