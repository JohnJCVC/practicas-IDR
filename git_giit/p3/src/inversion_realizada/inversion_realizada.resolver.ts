import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { InversionRealizada } from './entities/inversion_realizada.entity';
import { InversionRealizadaService } from './inversion_realizada.service';
import { CreateInversionRealizadaInput } from './dto/create-inversion_realizada.input';

@Resolver(() => InversionRealizada)
export class InversionRealizadaResolver {
  constructor(private readonly inversionRealizadaService: InversionRealizadaService) {}

  // Mutación para crear una nueva InversionRealizada
  @Mutation(() => InversionRealizada)
  async createInversionRealizada(
    @Args('createInversionRealizadaInput') createInversionRealizadaInput: CreateInversionRealizadaInput,
  ): Promise<InversionRealizada> {
    return this.inversionRealizadaService.create(createInversionRealizadaInput);
  }

  @Query(() => [InversionRealizada])
  async findAllInversionRealizada(): Promise<InversionRealizada[]> {
    return this.inversionRealizadaService.findAll();
  }

  @Query(() => InversionRealizada)
  async findOneInversionRealizada(@Args('id') id: string): Promise<InversionRealizada> {
    return this.inversionRealizadaService.findOne(id);
  }

  @Mutation(() => InversionRealizada)
  async updateInversionRealizada(
    @Args('id') id: string,
    @Args('updateInversionRealizadaInput') updateInversionRealizadaInput: CreateInversionRealizadaInput,
  ): Promise<InversionRealizada> {
    return this.inversionRealizadaService.update(id, updateInversionRealizadaInput);
  }

  @Mutation(() => InversionRealizada)
  async removeInversionRealizada(@Args('id') id: string): Promise<InversionRealizada> {
    return this.inversionRealizadaService.remove(id);
  }
}
