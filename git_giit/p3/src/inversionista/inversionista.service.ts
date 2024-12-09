import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { CreateInversionistaInput } from './dto/create-inversionista.input';
import { UpdateInversionistaInput } from './dto/update-inversionista.input';
import { Inversionista } from './entities/inversionista.entity';

@Injectable()
export class InversionistaService {
  constructor(
    @InjectModel(Inversionista.name) 
    private readonly inversionistaModel: Model<Inversionista>
  ) {}

  async create(createInversionistaDto: CreateInversionistaInput): Promise<Inversionista> {
    const newInversionista = new this.inversionistaModel({_id: new Types.ObjectId() ,...createInversionistaDto});
    console.log(newInversionista)
    return await newInversionista.save();
  }

  async findAll(): Promise<Inversionista[]> {
    return await this.inversionistaModel.find().exec();
  }

  async findOne(id: string): Promise<Inversionista> {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid) throw 'id invalido'
    const inve = await this.inversionistaModel.findById(id);
    console.log(inve)
    return inve
  }

  async update(id: Types.ObjectId, updateInversionistaDto: UpdateInversionistaInput): Promise<Inversionista> {
    return await this.inversionistaModel.findByIdAndUpdate(id, updateInversionistaDto, { new: true }).exec();
  }

  async remove(id: Types.ObjectId): Promise<void> {
    await this.inversionistaModel.findByIdAndDelete(id).exec();
  }
}