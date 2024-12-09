import { PartialType } from '@nestjs/mapped-types';
import { CreateControlDeActivoDto } from './create-control.dto';

export class UpdateControlActivoDto extends PartialType(CreateControlDeActivoDto) {
  id: number;
}
