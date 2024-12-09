import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InsumoEncuestaService } from './insumo-encuesta.service';
import { InsumoEncuesta } from './entities/insumo-encuesta.entity';
import { CreateInsumoEncuestaInput } from './dto/create-insumo-encuesta.input';
import { UpdateInsumoEncuestaInput } from './dto/update-insumo-encuesta.input';

@Resolver(() => InsumoEncuesta)
export class InsumoEncuestaResolver {
  constructor(private readonly insumoEncuestaService: InsumoEncuestaService) {}

  @Mutation(() => InsumoEncuesta)
  createInsumoEncuesta(@Args('createInsumoEncuestaInput') createInsumoEncuestaInput: CreateInsumoEncuestaInput) {
    return this.insumoEncuestaService.create(createInsumoEncuestaInput);
  }

  @Query(() => [InsumoEncuesta], { name: 'insumoEncuesta' })
  findAll() {
    return this.insumoEncuestaService.findAll();
  }

  @Query(() => InsumoEncuesta, { name: 'insumoEncuesta' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.insumoEncuestaService.findOne(id);
  }

  @Mutation(() => InsumoEncuesta)
  updateInsumoEncuesta(@Args('updateInsumoEncuestaInput') updateInsumoEncuestaInput: UpdateInsumoEncuestaInput) {
    return this.insumoEncuestaService.update(updateInsumoEncuestaInput.id, updateInsumoEncuestaInput);
  }

  @Mutation(() => InsumoEncuesta)
  removeInsumoEncuesta(@Args('id', { type: () => Int }) id: number) {
    return this.insumoEncuestaService.remove(id);
  }
}
