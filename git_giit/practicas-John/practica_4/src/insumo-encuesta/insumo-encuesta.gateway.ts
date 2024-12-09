import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { InsumoEncuestaService } from './insumo-encuesta.service';
import { CreateInsumoEncuestaDto } from './dto/create-insumo-encuesta.dto';
import { UpdateInsumoEncuestaDto } from './dto/update-insumo-encuesta.dto';

@WebSocketGateway()
export class InsumoEncuestaGateway {
  constructor(private readonly insumoEncuestaService: InsumoEncuestaService) {}

  @SubscribeMessage('createInsumoEncuesta')
  create(@MessageBody() createInsumoEncuestaDto: CreateInsumoEncuestaDto) {
    return this.insumoEncuestaService.create(createInsumoEncuestaDto);
  }

  @SubscribeMessage('findAllInsumoEncuesta')
  findAll() {
    return this.insumoEncuestaService.findAll();
  }

  @SubscribeMessage('findOneInsumoEncuesta')
  findOne(@MessageBody() id: number) {
    return this.insumoEncuestaService.findOne(id);
  }

  @SubscribeMessage('updateInsumoEncuesta')
  update(@MessageBody() updateInsumoEncuestaDto: UpdateInsumoEncuestaDto) {
    return this.insumoEncuestaService.update(updateInsumoEncuestaDto.id, updateInsumoEncuestaDto);
  }

  @SubscribeMessage('removeInsumoEncuesta')
  remove(@MessageBody() id: number) {
    return this.insumoEncuestaService.remove(id);
  }
}
