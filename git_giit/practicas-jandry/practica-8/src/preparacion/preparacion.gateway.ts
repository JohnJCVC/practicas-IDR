import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PreparacionService } from './preparacion.service';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';

@WebSocketGateway()
export class PreparacionGateway {
  constructor(private readonly preparacionService: PreparacionService) {}

  @SubscribeMessage('createPreparacion')
  create(@MessageBody() createPreparacionDto: CreatePreparacionDto) {
    return this.preparacionService.create(createPreparacionDto);
  }

  @SubscribeMessage('findAllPreparacion')
  findAll() {
    return this.preparacionService.findAll();
  }

  @SubscribeMessage('findOnePreparacion')
  findOne(@MessageBody() id: number) {
    return this.preparacionService.findOne(id);
  }

  @SubscribeMessage('updatePreparacion')
  update(@MessageBody() updatePreparacionDto: UpdatePreparacionDto) {
    return this.preparacionService.update(updatePreparacionDto.id, updatePreparacionDto);
  }

  @SubscribeMessage('removePreparacion')
  remove(@MessageBody() id: number) {
    return this.preparacionService.remove(id);
  }
}
