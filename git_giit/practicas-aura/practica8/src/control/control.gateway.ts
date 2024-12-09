import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ControlService } from './control.service';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';

@WebSocketGateway()
export class ControlGateway {
  constructor(private readonly controlService: ControlService) {}

  @SubscribeMessage('createControl')
  create(@MessageBody() createControlDto: CreateControlDto) {
    return this.controlService.create(createControlDto);
  }

  @SubscribeMessage('findAllControl')
  findAll() {
    return this.controlService.findAll();
  }

  @SubscribeMessage('findOneControl')
  findOne(@MessageBody() id: number) {
    return this.controlService.findOne(id);
  }

  @SubscribeMessage('updateControl')
  update(@MessageBody() updateControlDto: UpdateControlDto) {
    return this.controlService.update(updateControlDto.id, updateControlDto);
  }

  @SubscribeMessage('removeControl')
  remove(@MessageBody() id: number) {
    return this.controlService.remove(id);
  }
}
