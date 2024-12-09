import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@WebSocketGateway()
export class PacienteGateway {
  constructor(private readonly pacienteService: PacienteService) {}

  @SubscribeMessage('createPaciente')
  create(@MessageBody() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @SubscribeMessage('findAllPaciente')
  findAll() {
    return this.pacienteService.findAll();
  }

  @SubscribeMessage('findOnePaciente')
  findOne(@MessageBody() id: number) {
    return this.pacienteService.findOne(id);
  }

  @SubscribeMessage('updatePaciente')
  update(@MessageBody() updatePacienteDto: UpdatePacienteDto) {
    return this.pacienteService.update(updatePacienteDto.id, updatePacienteDto);
  }

  @SubscribeMessage('removePaciente')
  remove(@MessageBody() id: number) {
    return this.pacienteService.remove(id);
  }
}
