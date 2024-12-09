import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ActivoService } from './activo.service';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';

@Controller()
export class ActivoController {
  constructor(private readonly activoService: ActivoService) {}

  @MessagePattern('createActivo')
  create(@Payload() createActivoDto: CreateActivoDto) {
    return this.activoService.create(createActivoDto);
  }

  @MessagePattern('findAllActivo')
  findAll() {
    return this.activoService.findAll();
  }

  @MessagePattern('findOneActivo')
  findOne(@Payload() id: number) {
    return this.activoService.findOne(id);
  }

  @MessagePattern('updateActivo')
  update(@Payload() updateActivoDto: UpdateActivoDto) {
    return this.activoService.update(updateActivoDto.id, updateActivoDto);
  }

  @MessagePattern('removeActivo')
  remove(@Payload() id: number) {
    return this.activoService.remove(id);
  }
}
