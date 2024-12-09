import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InversionRealizada } from './entities/inversion_realizada.entity';
import { CreateInversionRealizadaInput } from './dto/create-inversion_realizada.input';
import { ConceptoInversion } from 'src/concepto_inversion/entities/concepto_inversion.entity';
import { Inversionista } from 'src/inversionista/entities/inversionista.entity';

@Injectable()
export class InversionRealizadaService {
  constructor(
    @InjectModel(InversionRealizada.name)
    private readonly inversionRealizadaModel: Model<InversionRealizada>, 
    @InjectModel(ConceptoInversion.name)
    private readonly conceptoModel: Model<ConceptoInversion>, 
    @InjectModel(Inversionista.name)
    private readonly inversionModel: Model<Inversionista>, 
  ) {}

  async create(createInversionRealizadaInput: CreateInversionRealizadaInput): Promise<InversionRealizada> {
    const createdInversionRealizada = new this.inversionRealizadaModel(createInversionRealizadaInput);
    return await createdInversionRealizada.save();
  }

  async findAll(): Promise<InversionRealizada[]> {
    return this.inversionRealizadaModel.find().exec();
  }

  async findOne(id: string): Promise<InversionRealizada> {
    // return this.inversionRealizadaModel.findById(id).exec();
    return await this.inversionRealizadaModel
    .findById(id)
    .populate('inversionista')  // Poblar el modelo Inversionista
    .populate('concepto')  // Poblar el modelo ConceptoInversion
    .exec();
  }

  async update(id: string, updateInversionRealizadaInput: CreateInversionRealizadaInput): Promise<InversionRealizada> {
    try{
    const updatedInversionRealizada = await this.inversionRealizadaModel.findByIdAndUpdate(id, updateInversionRealizadaInput, {
      new: true,
    }).exec();
    
    if (!updatedInversionRealizada) {
      throw new Error('InversionRealizada not found');
    }

    return updatedInversionRealizada;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating InversionRealizada');
  }

  }

  async remove(id: string): Promise<InversionRealizada> {
    const deletedInversionRealizada = await this.inversionRealizadaModel.findByIdAndDelete(id).exec();

    if (!deletedInversionRealizada) {
      throw new Error('InversionRealizada not found');
    }

    return deletedInversionRealizada;
  }
}
