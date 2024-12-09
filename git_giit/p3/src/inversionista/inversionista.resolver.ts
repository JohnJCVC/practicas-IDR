import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { InversionistaService } from './inversionista.service';
import { Inversionista } from './entities/inversionista.entity';
import { CreateInversionistaInput } from './dto/create-inversionista.input';
import { UpdateInversionistaInput } from './dto/update-inversionista.input';
import { Types } from 'mongoose';

@Resolver(() => Inversionista)
export class InversionistaResolver {
  constructor(private readonly inversionistaService: InversionistaService) {}

  @Mutation(() => Inversionista)
  createInversionista(@Args('createInversionistaInput') createInversionistaInput: CreateInversionistaInput) {
    return this.inversionistaService.create(createInversionistaInput);
  }

  @Query(() => [Inversionista], { name: 'inversionista' })
  findAll() {
    return this.inversionistaService.findAll();
  }

  @Query(() => Inversionista, { name: 'inversionistaById' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.inversionistaService.findOne(id);
  }

  @Mutation(() => Inversionista)
  updateInversionista(@Args('updateInversionistaInput') updateInversionistaInput: UpdateInversionistaInput) {
    return this.inversionistaService.update(updateInversionistaInput.id, updateInversionistaInput);
  }

  @Mutation(() => Inversionista)
  removeInversionista(@Args('id', { type: () => ID }) id: Types.ObjectId) {
    return this.inversionistaService.remove(id);
  }
}
