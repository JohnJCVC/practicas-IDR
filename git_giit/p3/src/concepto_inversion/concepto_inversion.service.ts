import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateConceptoInversionInput } from './dto/create-concepto_inversion.input';
import { UpdateConceptoInversionInput } from './dto/update-concepto_inversion.input';
import { ConceptoInversion } from './entities/concepto_inversion.entity';

@Injectable()
export class ConceptoInversionService {
  constructor(
    @InjectModel(ConceptoInversion.name) 
    private readonly conceptoInversionModel: Model<ConceptoInversion>
  ) {}

  async create(createConceptoInversionDto: CreateConceptoInversionInput): Promise<ConceptoInversion> {
    const newConceptoInversion = new this.conceptoInversionModel(createConceptoInversionDto);
    await newConceptoInversion.save();
    console.log(newConceptoInversion)
    return newConceptoInversion 
  }

  async findAll(): Promise<ConceptoInversion[]> {
    return await this.conceptoInversionModel.find().exec();
  }

  async findOne(id: string): Promise<ConceptoInversion> {
    return await this.conceptoInversionModel.findById(id).exec();
  }

  async update(id: Types.ObjectId, updateConceptoInversionDto: UpdateConceptoInversionInput): Promise<ConceptoInversion> {
    return await this.conceptoInversionModel.findByIdAndUpdate(id, updateConceptoInversionDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.conceptoInversionModel.findByIdAndDelete(id).exec();
  }
}
