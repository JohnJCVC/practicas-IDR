import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ActivoService } from './activo.service';
import { Activo } from './entities/activo.entity';
import { CreateActivoInput } from './dto/create-activo.input';
import { UpdateActivoInput } from './dto/update-activo.input';

@Resolver(() => Activo)
export class ActivoResolver {
  constructor(private readonly activoService: ActivoService) {}

  @Mutation(() => Activo)
  createActivo(@Args('createActivoInput') createActivoInput: CreateActivoInput) {
    return this.activoService.create(createActivoInput);
  }

  @Query(() => [Activo], { name: 'activo' })
  findAll() {
    return this.activoService.findAll();
  }

  @Query(() => Activo, { name: 'activo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.activoService.findOne(id);
  }

  @Mutation(() => Activo)
  updateActivo(@Args('updateActivoInput') updateActivoInput: UpdateActivoInput) {
    return this.activoService.update(updateActivoInput.id, updateActivoInput);
  }

  @Mutation(() => Activo)
  removeActivo(@Args('id', { type: () => Int }) id: number) {
    return this.activoService.remove(id);
  }
}
