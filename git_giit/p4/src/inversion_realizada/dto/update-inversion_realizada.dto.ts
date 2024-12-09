import { PartialType } from '@nestjs/mapped-types';
import { CreateInversionRealizadaDto } from './create-inversion_realizada.dto';

export class UpdateInversionRealizadaDto extends PartialType(CreateInversionRealizadaDto) {
  id: number;
}
