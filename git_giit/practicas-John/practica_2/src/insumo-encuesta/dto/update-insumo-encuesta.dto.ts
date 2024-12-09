import { PartialType } from '@nestjs/mapped-types';
import { CreateInsumoEncuestaDto } from './create-insumo-encuesta.dto';

export class UpdateInsumoEncuestaDto extends PartialType(CreateInsumoEncuestaDto) {}
