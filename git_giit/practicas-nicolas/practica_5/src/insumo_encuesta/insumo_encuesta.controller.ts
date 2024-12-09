import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InsumoEncuestaService } from './insumo_encuesta.service';
import { CreateInsumoEncuestaDto } from './dto/create-insumo_encuesta.dto';
import { UpdateInsumoEncuestaDto } from './dto/update-insumo_encuesta.dto';

@Controller()
export class InsumoEncuestaController {
  constructor(private readonly insumoEncuestaService: InsumoEncuestaService) {}

  @MessagePattern('createInsumoEncuesta')
  create(@Payload() createInsumoEncuestaDto: CreateInsumoEncuestaDto) {
    return this.insumoEncuestaService.create(createInsumoEncuestaDto);
  }

  @MessagePattern('findAllInsumoEncuesta')
  findAll() {
    return this.insumoEncuestaService.findAll();
  }

  @MessagePattern('findOneInsumoEncuesta')
  findOne(@Payload() id: number) {
    return this.insumoEncuestaService.findOne(id);
  }

  @MessagePattern('updateInsumoEncuesta')
  update(@Payload() updateInsumoEncuestaDto: UpdateInsumoEncuestaDto) {
    return this.insumoEncuestaService.update(updateInsumoEncuestaDto.id, updateInsumoEncuestaDto);
  }

  @MessagePattern('removeInsumoEncuesta')
  remove(@Payload() id: number) {
    return this.insumoEncuestaService.remove(id);
  }
}
