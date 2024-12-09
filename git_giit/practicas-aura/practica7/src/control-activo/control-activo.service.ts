import { Injectable } from '@nestjs/common';
import { CreateControlActivoInput } from './dto/create-control-activo.input';
import { UpdateControlActivoInput } from './dto/update-control-activo.input';

@Injectable()
export class ControlActivoService {
  create(createControlActivoInput: CreateControlActivoInput) {
    return 'This action adds a new controlActivo';
  }

  findAll() {
    return `This action returns all controlActivo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} controlActivo`;
  }

  update(id: number, updateControlActivoInput: UpdateControlActivoInput) {
    return `This action updates a #${id} controlActivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} controlActivo`;
  }
}
