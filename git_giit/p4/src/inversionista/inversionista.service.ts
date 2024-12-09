import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInversionistaDto } from './dto/create-inversionista.dto';
import { UpdateInversionistaDto } from './dto/update-inversionista.dto';
import { Inversionista } from './entities/inversionista.entity';

@Injectable()
export class InversionistaService {
  constructor(
    @InjectModel(Inversionista.name) 
    private readonly inversionistaModel: Model<Inversionista>
  ) {}

  async create(createInversionistaDto: CreateInversionistaDto): Promise<Inversionista> {
    const newInversionista = new this.inversionistaModel(createInversionistaDto);
    return await newInversionista.save();
  }

  async findAll(): Promise<Inversionista[]> {
    return await this.inversionistaModel.find().exec();
  }

  async findOne(id: number): Promise<Inversionista> {
    return await this.inversionistaModel.findById(id).exec();
  }

  async update(id: number, updateInversionistaDto: UpdateInversionistaDto): Promise<Inversionista> {
    return await this.inversionistaModel.findByIdAndUpdate(id, updateInversionistaDto, { new: true }).exec();
  }

  async remove(id: number): Promise<void> {
    await this.inversionistaModel.findByIdAndDelete(id).exec();
  }
}