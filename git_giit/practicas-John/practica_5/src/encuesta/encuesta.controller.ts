import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EncuestaService } from './encuesta.service';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';

@Controller()
export class EncuestaController {
  constructor(private readonly encuestaService: EncuestaService) {}

  @MessagePattern('createEncuesta')
  create(@Payload() createEncuestaDto: CreateEncuestaDto) {
    return this.encuestaService.create(createEncuestaDto);
  }

  @MessagePattern('findAllEncuesta')
  findAll() {
    return this.encuestaService.findAll();
  }

  @MessagePattern('findOneEncuesta')
  findOne(@Payload() id: number) {
    return this.encuestaService.findOne(id);
  }

  @MessagePattern('updateEncuesta')
  update(@Payload() updateEncuestaDto: UpdateEncuestaDto) {
    return this.encuestaService.update(updateEncuestaDto.id, updateEncuestaDto);
  }

  @MessagePattern('removeEncuesta')
  remove(@Payload() id: number) {
    return this.encuestaService.remove(id);
  }
}
