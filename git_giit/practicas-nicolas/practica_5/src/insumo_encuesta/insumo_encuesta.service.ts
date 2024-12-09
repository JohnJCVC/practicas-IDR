import { Injectable } from '@nestjs/common';
import { CreateInsumoEncuestaDto } from './dto/create-insumo_encuesta.dto';
import { UpdateInsumoEncuestaDto } from './dto/update-insumo_encuesta.dto';

@Injectable()
export class InsumoEncuestaService {
  create(createInsumoEncuestaDto: CreateInsumoEncuestaDto) {
    return 'This action adds a new insumoEncuesta';
  }

  findAll() {
    return `This action returns all insumoEncuesta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insumoEncuesta`;
  }

  update(id: number, updateInsumoEncuestaDto: UpdateInsumoEncuestaDto) {
    return `This action updates a #${id} insumoEncuesta`;
  }

  remove(id: number) {
    return `This action removes a #${id} insumoEncuesta`;
  }
}
