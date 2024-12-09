import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInversionRealizadaDto } from './dto/create-inversion_realizada.dto';
import { UpdateInversionRealizadaDto } from './dto/update-inversion_realizada.dto';
import { InversionRealizada } from './entities/inversion_realizada.entity';

@Injectable()
export class InversionRealizadaService {
  constructor(
    @InjectModel(InversionRealizada.name) 
    private readonly inversionRealizadaModel: Model<InversionRealizada>
  ) {}

  async create(createInversionRealizadaDto: CreateInversionRealizadaDto): Promise<InversionRealizada> {
    const newInversionRealizada = new this.inversionRealizadaModel(createInversionRealizadaDto);
    return await newInversionRealizada.save();
  }

  async findAll(): Promise<InversionRealizada[]> {
    return await this.inversionRealizadaModel.find().exec();
  }

  async findOne(id: number): Promise<InversionRealizada> {
    return await this.inversionRealizadaModel.findById(id).exec();
  }

  async update(id: number, updateInversionRealizadaDto: UpdateInversionRealizadaDto): Promise<InversionRealizada> {
    return await this.inversionRealizadaModel.findByIdAndUpdate(id, updateInversionRealizadaDto, { new: true }).exec();
  }

  async remove(id: number): Promise<void> {
    await this.inversionRealizadaModel.findByIdAndDelete(id).exec();
  }
}
