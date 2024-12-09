import { Injectable } from '@nestjs/common';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';

@Injectable()
export class ActivoService {
  create(createActivoDto: CreateActivoDto) {
    return 'This action adds a new activo';
  }

  findAll() {
    return `This action returns all activo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activo`;
  }

  update(id: number, updateActivoDto: UpdateActivoDto) {
    return `This action updates a #${id} activo`;
  }

  remove(id: number) {
    return `This action removes a #${id} activo`;
  }
}
