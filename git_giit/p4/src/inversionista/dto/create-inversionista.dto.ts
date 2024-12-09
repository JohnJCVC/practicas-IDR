import { IsString } from 'class-validator';

export class CreateInversionistaDto {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly identificacion: string;
}
