import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { RecetaService } from './receta.service';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';

@WebSocketGateway()
export class RecetaGateway {
  constructor(private readonly recetaService: RecetaService) {}

  @SubscribeMessage('createReceta')
  create(@MessageBody() createRecetaDto: CreateRecetaDto) {
    return this.recetaService.create(createRecetaDto);
  }

  @SubscribeMessage('findAllReceta')
  findAll() {
    return this.recetaService.findAll();
  }

  @SubscribeMessage('findOneReceta')
  findOne(@MessageBody() id: number) {
    return this.recetaService.findOne(id);
  }

  @SubscribeMessage('updateReceta')
  update(@MessageBody() updateRecetaDto: UpdateRecetaDto) {
    return this.recetaService.update(updateRecetaDto.id, updateRecetaDto);
  }

  @SubscribeMessage('removeReceta')
  remove(@MessageBody() id: number) {
    return this.recetaService.remove(id);
  }
}
