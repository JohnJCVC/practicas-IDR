import { Injectable } from '@nestjs/common';
import { CreateControlRealizadoInput } from './dto/create-control-realizado.input';
import { UpdateControlRealizadoInput } from './dto/update-control-realizado.input';

@Injectable()
export class ControlRealizadoService {
  create(createControlRealizadoInput: CreateControlRealizadoInput) {
    return 'This action adds a new controlRealizado';
  }

  findAll() {
    return `This action returns all controlRealizado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} controlRealizado`;
  }

  update(id: number, updateControlRealizadoInput: UpdateControlRealizadoInput) {
    return `This action updates a #${id} controlRealizado`;
  }

  remove(id: number) {
    return `This action removes a #${id} controlRealizado`;
  }
}
