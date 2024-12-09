import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConceptoInversion } from './entities/concepto_inversion.entity';
import { CreateConceptoInversionDto } from './dto/create-concepto_inversion.dto';
import { UpdateConceptoInversionDto } from './dto/update-concepto_inversion.dto';

@Injectable()
export class ConceptoInversionService {
  constructor(
    @InjectModel(ConceptoInversion.name) 
    private readonly conceptoInversionModel: Model<ConceptoInversion>
  ) {}

  async create(createConceptoInversionDto: CreateConceptoInversionDto): Promise<ConceptoInversion> {
    const newConceptoInversion = new this.conceptoInversionModel(createConceptoInversionDto);
    await newConceptoInversion.save();
    return newConceptoInversion 
  }

  async findAll(): Promise<ConceptoInversion[]> {
    return await this.conceptoInversionModel.find().exec();
  }

  async findOne(id: number): Promise<ConceptoInversion> {
    return await this.conceptoInversionModel.findById(id).exec();
  }

  async update(id: number, updateConceptoInversionDto: UpdateConceptoInversionDto): Promise<ConceptoInversion> {
    return await this.conceptoInversionModel.findByIdAndUpdate(id, updateConceptoInversionDto, { new: true }).exec();
  }

  async remove(id: number): Promise<void> {
    await this.conceptoInversionModel.findByIdAndDelete(id).exec();
  }
}
