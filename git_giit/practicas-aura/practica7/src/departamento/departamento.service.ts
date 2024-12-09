import { Injectable } from '@nestjs/common';
import { CreateDepartamentoInput } from './dto/create-departamento.input';
import { UpdateDepartamentoInput } from './dto/update-departamento.input';

@Injectable()
export class DepartamentoService {
  create(createDepartamentoInput: CreateDepartamentoInput) {
    return 'This action adds a new departamento';
  }

  findAll() {
    return `This action returns all departamento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departamento`;
  }

  update(id: number, updateDepartamentoInput: UpdateDepartamentoInput) {
    return `This action updates a #${id} departamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} departamento`;
  }
}
