import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ControlRealizadoService } from './control-realizado.service';
import { CreateControlRealizadoDto } from './dto/create-control-realizado.dto';
import { UpdateControlRealizadoDto } from './dto/update-control-realizado.dto';

@WebSocketGateway()
export class ControlRealizadoGateway {
  constructor(private readonly controlRealizadoService: ControlRealizadoService) {}

  @SubscribeMessage('createControlRealizado')
  create(@MessageBody() createControlRealizadoDto: CreateControlRealizadoDto) {
    return this.controlRealizadoService.create(createControlRealizadoDto);
  }

  @SubscribeMessage('findAllControlRealizado')
  findAll() {
    return this.controlRealizadoService.findAll();
  }

  @SubscribeMessage('findOneControlRealizado')
  findOne(@MessageBody() id: number) {
    return this.controlRealizadoService.findOne(id);
  }

  @SubscribeMessage('updateControlRealizado')
  update(@MessageBody() updateControlRealizadoDto: UpdateControlRealizadoDto) {
    return this.controlRealizadoService.update(updateControlRealizadoDto.id, updateControlRealizadoDto);
  }

  @SubscribeMessage('removeControlRealizado')
  remove(@MessageBody() id: number) {
    return this.controlRealizadoService.remove(id);
  }
}
