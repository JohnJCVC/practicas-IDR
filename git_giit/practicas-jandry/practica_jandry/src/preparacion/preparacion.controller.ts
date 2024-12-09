import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PreparacionService } from './preparacion.service';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';

@Controller()
export class PreparacionController {
  constructor(private readonly preparacionService: PreparacionService) {}

  @MessagePattern('createPreparacion')
  create(@Payload() createPreparacionDto: CreatePreparacionDto) {
    return this.preparacionService.create(createPreparacionDto);
  }

  @MessagePattern('findAllPreparacion')
  findAll() {
    return this.preparacionService.findAll();
  }

  @MessagePattern('findOnePreparacion')
  findOne(@Payload() id: number) {
    return this.preparacionService.findOne(id);
  }

  @MessagePattern('updatePreparacion')
  update(@Payload() updatePreparacionDto: UpdatePreparacionDto) {
    return this.preparacionService.update(updatePreparacionDto.id, updatePreparacionDto);
  }

  @MessagePattern('removePreparacion')
  remove(@Payload() id: number) {
    return this.preparacionService.remove(id);
  }
}
