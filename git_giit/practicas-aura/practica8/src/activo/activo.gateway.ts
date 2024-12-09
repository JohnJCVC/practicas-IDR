import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ActivoService } from './activo.service';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';

@WebSocketGateway()
export class ActivoGateway {
  constructor(private readonly activoService: ActivoService) {}

  @SubscribeMessage('createActivo')
  create(@MessageBody() createActivoDto: CreateActivoDto) {
    return this.activoService.create(createActivoDto);
  }

  @SubscribeMessage('findAllActivo')
  findAll() {
    return this.activoService.findAll();
  }

  @SubscribeMessage('findOneActivo')
  findOne(@MessageBody() id: number) {
    return this.activoService.findOne(id);
  }

  @SubscribeMessage('updateActivo')
  update(@MessageBody() updateActivoDto: UpdateActivoDto) {
    return this.activoService.update(updateActivoDto.id, updateActivoDto);
  }

  @SubscribeMessage('removeActivo')
  remove(@MessageBody() id: number) {
    return this.activoService.remove(id);
  }
}
