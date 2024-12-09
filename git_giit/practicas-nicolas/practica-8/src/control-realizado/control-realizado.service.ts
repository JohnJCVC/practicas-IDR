import { Injectable } from '@nestjs/common';
import { CreateControlRealizadoDto } from './dto/create-control-realizado.dto';
import { UpdateControlRealizadoDto } from './dto/update-control-realizado.dto';

@Injectable()
export class ControlRealizadoService {
  create(createControlRealizadoDto: CreateControlRealizadoDto) {
    return 'This action adds a new controlRealizado';
  }

  findAll() {
    return `This action returns all controlRealizado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} controlRealizado`;
  }

  update(id: number, updateControlRealizadoDto: UpdateControlRealizadoDto) {
    return `This action updates a #${id} controlRealizado`;
  }

  remove(id: number) {
    return `This action removes a #${id} controlRealizado`;
  }
}
