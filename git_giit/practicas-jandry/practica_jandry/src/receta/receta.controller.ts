import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RecetaService } from './receta.service';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';

@Controller()
export class RecetaController {
  constructor(private readonly recetaService: RecetaService) {}

  @MessagePattern('createReceta')
  create(@Payload() createRecetaDto: CreateRecetaDto) {
    return this.recetaService.create(createRecetaDto);
  }

  @MessagePattern('findAllReceta')
  findAll() {
    return this.recetaService.findAll();
  }

  @MessagePattern('findOneReceta')
  findOne(@Payload() id: number) {
    return this.recetaService.findOne(id);
  }

  @MessagePattern('updateReceta')
  update(@Payload() updateRecetaDto: UpdateRecetaDto) {
    return this.recetaService.update(updateRecetaDto.id, updateRecetaDto);
  }

  @MessagePattern('removeReceta')
  remove(@Payload() id: number) {
    return this.recetaService.remove(id);
  }
}
