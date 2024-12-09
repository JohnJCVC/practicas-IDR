import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@WebSocketGateway()
export class DepartamentoGateway {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @SubscribeMessage('createDepartamento')
  create(@MessageBody() createDepartamentoDto: CreateDepartamentoDto) {
    return this.departamentoService.create(createDepartamentoDto);
  }

  @SubscribeMessage('findAllDepartamento')
  findAll() {
    return this.departamentoService.findAll();
  }

  @SubscribeMessage('findOneDepartamento')
  findOne(@MessageBody() id: number) {
    return this.departamentoService.findOne(id);
  }

  @SubscribeMessage('updateDepartamento')
  update(@MessageBody() updateDepartamentoDto: UpdateDepartamentoDto) {
    return this.departamentoService.update(updateDepartamentoDto.id, updateDepartamentoDto);
  }

  @SubscribeMessage('removeDepartamento')
  remove(@MessageBody() id: number) {
    return this.departamentoService.remove(id);
  }
}
