import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { InversionRealizadaService } from './inversion_realizada.service';
import { CreateInversionRealizadaDto } from './dto/create-inversion_realizada.dto';
import { UpdateInversionRealizadaDto } from './dto/update-inversion_realizada.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class InversionRealizadaGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private wss: Server;  

  constructor(private readonly inversionRealizadaService: InversionRealizadaService) {}

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

  @SubscribeMessage('createInversionRealizada')
  async create(@MessageBody() createInversionRealizadaDto: CreateInversionRealizadaDto) {
    const inversion = await this.inversionRealizadaService.create(createInversionRealizadaDto);
    this.wss.emit('inversionCreada', inversion);  
    return inversion;
  }

  @SubscribeMessage('findAllInversionRealizada')
  async findAll() {
    const inversiones = await this.inversionRealizadaService.findAll();
    this.wss.emit('inversionesListadas', inversiones);  
    return inversiones;
  }

  @SubscribeMessage('findOneInversionRealizada')
  async findOne(@MessageBody() id: number) {
    const inversion = await this.inversionRealizadaService.findOne(id);
    this.wss.emit('inversionEncontrada', inversion);
    return inversion;
  }

  @SubscribeMessage('updateInversionRealizada')
  async update(@MessageBody() updateInversionRealizadaDto: UpdateInversionRealizadaDto) {
    const updatedInversion = await this.inversionRealizadaService.update(updateInversionRealizadaDto.id, updateInversionRealizadaDto);
    this.wss.emit('inversionActualizada', updatedInversion);  
    return updatedInversion;
  }

  @SubscribeMessage('removeInversionRealizada')
  async remove(@MessageBody() id: number) {
    const removedInversion = await this.inversionRealizadaService.remove(id);
    this.wss.emit('inversionEliminada', removedInversion);  
    return removedInversion;
  }
}
