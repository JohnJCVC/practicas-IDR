import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { ConceptoInversionService } from './concepto_inversion.service';
import { CreateConceptoInversionDto } from './dto/create-concepto_inversion.dto';
import { UpdateConceptoInversionDto } from './dto/update-concepto_inversion.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ConceptoInversionGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly conceptoInversionService: ConceptoInversionService) {}

  private wss: Server;

  afterInit(server: Server) {
    this.wss = server;
    console.log('WebSocket Gateway Initialized');
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createConceptoInversion')
  async create(@MessageBody() createConceptoInversionDto: CreateConceptoInversionDto) {
    const concepto = await this.conceptoInversionService.create(createConceptoInversionDto);
    this.wss.emit('inversionCreada', concepto);
    return concepto;
  }

  @SubscribeMessage('findAllConceptoInversion')
  async findAll() {
    const conceptos = await this.conceptoInversionService.findAll();
    this.wss.emit('ConseptoInversion', conceptos);
    return conceptos;
  }

  @SubscribeMessage('findOneConceptoInversion')
  async findOne(@MessageBody() id: number) {
    const concepto = await this.conceptoInversionService.findOne(id);
    if (concepto) {
      this.wss.emit('ConceptoId', concepto); 
    }
    return concepto;
  }

  @SubscribeMessage('updateConceptoInversion')
  async update(@MessageBody() updateConceptoInversionDto: UpdateConceptoInversionDto) {
    const updatedConcepto = await this.conceptoInversionService.update(updateConceptoInversionDto.id, updateConceptoInversionDto);
    this.wss.emit('ConceptoUpdated', updatedConcepto); 
    return updatedConcepto;
  }

  @SubscribeMessage('removeConceptoInversion')
  async remove(@MessageBody() id: number) {
    const removedConcepto = await this.conceptoInversionService.remove(id);
    this.wss.emit('ConceptoRemoved', removedConcepto); 
    return removedConcepto;
  }
}
