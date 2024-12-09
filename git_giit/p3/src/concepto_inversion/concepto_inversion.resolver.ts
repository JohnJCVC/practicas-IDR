import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ConceptoInversionService } from './concepto_inversion.service';
import { ConceptoInversion } from './entities/concepto_inversion.entity';
import { CreateConceptoInversionInput } from './dto/create-concepto_inversion.input';
import { UpdateConceptoInversionInput } from './dto/update-concepto_inversion.input';
import { ObjectId, Types } from 'mongoose';

@Resolver(() => ConceptoInversion)
export class ConceptoInversionResolver {
  constructor(private readonly conceptoInversionService: ConceptoInversionService) {}

  @Mutation(() => ConceptoInversion)
  createConceptoInversion(@Args('createConceptoInversionInput') createConceptoInversionInput: CreateConceptoInversionInput) {
    return this.conceptoInversionService.create(createConceptoInversionInput);
  }

  @Query(() => [ConceptoInversion], { name: 'conceptoInversion' })
  async findAll() {
    const concepto = await this.conceptoInversionService.findAll();
    console.log(concepto)
    return concepto
  }

  @Query(() => ConceptoInversion, { name: 'conceptoInversionById' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.conceptoInversionService.findOne(id);
  }

  @Mutation(() => ConceptoInversion)
  updateConceptoInversion(@Args('updateConceptoInversionInput') updateConceptoInversionInput: UpdateConceptoInversionInput) {
    return this.conceptoInversionService.update(updateConceptoInversionInput.id, updateConceptoInversionInput);
  }

  @Mutation(() => ConceptoInversion)
  removeConceptoInversion(@Args('id', { type: () => String }) id: string) {
    return this.conceptoInversionService.remove(id);
  }
}
