import { Injectable } from '@nestjs/common';
import { CreateActivoInput } from './dto/create-activo.input';
import { UpdateActivoInput } from './dto/update-activo.input';

@Injectable()
export class ActivoService {
  create(createActivoInput: CreateActivoInput) {
    return 'This action adds a new activo';
  }

  findAll() {
    return `This action returns all activo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activo`;
  }

  update(id: number, updateActivoInput: UpdateActivoInput) {
    return `This action updates a #${id} activo`;
  }

  remove(id: number) {
    return `This action removes a #${id} activo`;
  }
}
