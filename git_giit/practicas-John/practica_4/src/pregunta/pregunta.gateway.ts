import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PreguntaService } from './pregunta.service';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';

@WebSocketGateway()
export class PreguntaGateway {
  constructor(private readonly preguntaService: PreguntaService) {}

  @SubscribeMessage('createPregunta')
  create(@MessageBody() createPreguntaDto: CreatePreguntaDto) {
    return this.preguntaService.create(createPreguntaDto);
  }

  @SubscribeMessage('findAllPregunta')
  findAll() {
    return this.preguntaService.findAll();
  }

  @SubscribeMessage('findOnePregunta')
  findOne(@MessageBody() id: number) {
    return this.preguntaService.findOne(id);
  }

  @SubscribeMessage('updatePregunta')
  update(@MessageBody() updatePreguntaDto: UpdatePreguntaDto) {
    return this.preguntaService.update(updatePreguntaDto.id, updatePreguntaDto);
  }

  @SubscribeMessage('removePregunta')
  remove(@MessageBody() id: number) {
    return this.preguntaService.remove(id);
  }
}
