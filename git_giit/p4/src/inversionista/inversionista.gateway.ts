import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { InversionistaService } from './inversionista.service';
import { CreateInversionistaDto } from './dto/create-inversionista.dto';
import { UpdateInversionistaDto } from './dto/update-inversionista.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class InversionistaGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private wss: Server;

  constructor(private readonly inversionistaService: InversionistaService) {}

  afterInit(server: Server) {
    this.wss = server;
    console.log('Inversionista WebSocket Gateway Initialized');
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createInversionista')
  async create(@MessageBody() createInversionistaDto: CreateInversionistaDto) {
    const inversionista = await this.inversionistaService.create(createInversionistaDto);
    this.wss.emit('inversionistaCreado', inversionista);  
    return inversionista;
  }

  @SubscribeMessage('findAllInversionista')
  async findAll() {
    const inversionistas = await this.inversionistaService.findAll();
    this.wss.emit('inversionistasListados', inversionistas);  
    return inversionistas;
  }

  @SubscribeMessage('findOneInversionista')
  async findOne(@MessageBody() id: number) {
    const inversionista = await this.inversionistaService.findOne(id);
    this.wss.emit('inversionistaEncontrado', inversionista);  
    return inversionista;
  }

  @SubscribeMessage('updateInversionista')
  async update(@MessageBody() updateInversionistaDto: UpdateInversionistaDto) {
    const updatedInversionista = await this.inversionistaService.update(updateInversionistaDto.id, updateInversionistaDto);
    this.wss.emit('inversionistaActualizado', updatedInversionista);  
    return updatedInversionista;
  }

  @SubscribeMessage('removeInversionista')
  async remove(@MessageBody() id: number) {
    const removedInversionista = await this.inversionistaService.remove(id);
    this.wss.emit('inversionistaEliminado', removedInversionista);  // Emit event to all connected clients
    return removedInversionista;
  }
}
