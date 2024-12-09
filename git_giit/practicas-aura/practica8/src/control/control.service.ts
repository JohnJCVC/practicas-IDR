import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateControlDeActivoDto } from './dto/create-control.dto';
import { ControlDeActivo } from './entities/control.entity';
import { UpdateControlActivoDto } from './dto/update-control.dto';

@Injectable()
export class ControlActivoService {
  
  constructor(
    @InjectModel(ControlDeActivo.name)
    private readonly controlActivo: Model<ControlDeActivo>
  ){}
  
  create(createControlDeActivoDto: CreateControlDeActivoDto) {
    return this.controlActivo.create(createControlDeActivoDto)
  }

  findAll():Promise<ControlDeActivo[]> {
    return this.controlActivo.find()
  }

  findOne(id: number):Promise<ControlDeActivo> {
    const control_activo = this.controlActivo.findOne({where: {id}})
    if( !control_activo ) throw new Error (`control activo con id ${id} no encontrado`)
    return control_activo;
  }

  update(id: number, updateControlActivoDto: UpdateControlActivoDto) {
    const control_activo = this.findOne(id);
    this.controlActivo.updateOne(updateControlActivoDto)
    return control_activo;
  }

  remove(id: number):Promise<ControlDeActivo> {
    const control_activo = this.findOne(id)
    this.controlActivo.deleteOne(control_activo)
    return control_activo
  }
}
