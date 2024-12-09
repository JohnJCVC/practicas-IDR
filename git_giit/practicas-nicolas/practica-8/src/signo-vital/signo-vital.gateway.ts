import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { SignoVitalService } from './signo-vital.service';
import { CreateSignoVitalDto } from './dto/create-signo-vital.dto';
import { UpdateSignoVitalDto } from './dto/update-signo-vital.dto';

@WebSocketGateway()
export class SignoVitalGateway {
  constructor(private readonly signoVitalService: SignoVitalService) {}

  @SubscribeMessage('createSignoVital')
  create(@MessageBody() createSignoVitalDto: CreateSignoVitalDto) {
    return this.signoVitalService.create(createSignoVitalDto);
  }

  @SubscribeMessage('findAllSignoVital')
  findAll() {
    return this.signoVitalService.findAll();
  }

  @SubscribeMessage('findOneSignoVital')
  findOne(@MessageBody() id: number) {
    return this.signoVitalService.findOne(id);
  }

  @SubscribeMessage('updateSignoVital')
  update(@MessageBody() updateSignoVitalDto: UpdateSignoVitalDto) {
    return this.signoVitalService.update(updateSignoVitalDto.id, updateSignoVitalDto);
  }

  @SubscribeMessage('removeSignoVital')
  remove(@MessageBody() id: number) {
    return this.signoVitalService.remove(id);
  }
}
