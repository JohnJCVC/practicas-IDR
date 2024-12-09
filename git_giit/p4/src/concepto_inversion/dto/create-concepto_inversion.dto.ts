import { IsString, IsInt, IsPositive, IsOptional } from 'class-validator';

export class CreateConceptoInversionDto {
  @IsString()
  @IsOptional()
  readonly concepto: string;

  @IsString()
  @IsOptional()
  readonly detalle: string;

  @IsInt()
  @IsPositive()
  readonly valor_minimo: number;

  @IsInt()
  @IsPositive()
  readonly duracion_maxima: number;
}
