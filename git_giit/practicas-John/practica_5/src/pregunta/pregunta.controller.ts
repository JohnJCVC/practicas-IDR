import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PreguntaService } from './pregunta.service';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';

@Controller()
export class PreguntaController {
  constructor(private readonly preguntaService: PreguntaService) {}

  @MessagePattern('createPregunta')
  create(@Payload() createPreguntaDto: CreatePreguntaDto) {
    return this.preguntaService.create(createPreguntaDto);
  }

  @MessagePattern('findAllPregunta')
  findAll() {
    return this.preguntaService.findAll();
  }

  @MessagePattern('findOnePregunta')
  findOne(@Payload() id: number) {
    return this.preguntaService.findOne(id);
  }

  @MessagePattern('updatePregunta')
  update(@Payload() updatePreguntaDto: UpdatePreguntaDto) {
    return this.preguntaService.update(updatePreguntaDto.id, updatePreguntaDto);
  }

  @MessagePattern('removePregunta')
  remove(@Payload() id: number) {
    return this.preguntaService.remove(id);
  }
}
