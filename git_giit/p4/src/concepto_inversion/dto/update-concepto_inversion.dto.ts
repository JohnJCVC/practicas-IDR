import { PartialType } from '@nestjs/mapped-types';
import { CreateConceptoInversionDto } from './create-concepto_inversion.dto';

export class UpdateConceptoInversionDto extends PartialType(CreateConceptoInversionDto) {
  id: number;
}
