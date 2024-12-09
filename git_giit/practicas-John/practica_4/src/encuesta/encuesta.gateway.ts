import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { EncuestaService } from './encuesta.service';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';

@WebSocketGateway()
export class EncuestaGateway {
  constructor(private readonly encuestaService: EncuestaService) {}

  @SubscribeMessage('createEncuesta')
  create(@MessageBody() createEncuestaDto: CreateEncuestaDto) {
    return this.encuestaService.create(createEncuestaDto);
  }

  @SubscribeMessage('findAllEncuesta')
  findAll() {
    return this.encuestaService.findAll();
  }

  @SubscribeMessage('findOneEncuesta')
  findOne(@MessageBody() id: number) {
    return this.encuestaService.findOne(id);
  }

  @SubscribeMessage('updateEncuesta')
  update(@MessageBody() updateEncuestaDto: UpdateEncuestaDto) {
    return this.encuestaService.update(updateEncuestaDto.id, updateEncuestaDto);
  }

  @SubscribeMessage('removeEncuesta')
  remove(@MessageBody() id: number) {
    return this.encuestaService.remove(id);
  }
}
