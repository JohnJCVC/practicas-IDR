import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CocineroService } from './cocinero.service';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';

@Controller()
export class CocineroController {
  constructor(private readonly cocineroService: CocineroService) {}

  @MessagePattern('createCocinero')
  create(@Payload() createCocineroDto: CreateCocineroDto) {
    return this.cocineroService.create(createCocineroDto);
  }

  @MessagePattern('findAllCocinero')
  findAll() {
    return this.cocineroService.findAll();
  }

  @MessagePattern('findOneCocinero')
  findOne(@Payload() id: number) {
    return this.cocineroService.findOne(id);
  }

  @MessagePattern('updateCocinero')
  update(@Payload() updateCocineroDto: UpdateCocineroDto) {
    return this.cocineroService.update(updateCocineroDto.id, updateCocineroDto);
  }

  @MessagePattern('removeCocinero')
  remove(@Payload() id: number) {
    return this.cocineroService.remove(id);
  }
}
