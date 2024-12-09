import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ControlActivoService } from './control-activo.service';
import { ControlActivo } from './entities/control-activo.entity';
import { CreateControlActivoInput } from './dto/create-control-activo.input';
import { UpdateControlActivoInput } from './dto/update-control-activo.input';

@Resolver(() => ControlActivo)
export class ControlActivoResolver {
  constructor(private readonly controlActivoService: ControlActivoService) {}

  @Mutation(() => ControlActivo)
  createControlActivo(@Args('createControlActivoInput') createControlActivoInput: CreateControlActivoInput) {
    return this.controlActivoService.create(createControlActivoInput);
  }

  @Query(() => [ControlActivo], { name: 'controlActivo' })
  findAll() {
    return this.controlActivoService.findAll();
  }

  @Query(() => ControlActivo, { name: 'controlActivo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.controlActivoService.findOne(id);
  }

  @Mutation(() => ControlActivo)
  updateControlActivo(@Args('updateControlActivoInput') updateControlActivoInput: UpdateControlActivoInput) {
    return this.controlActivoService.update(updateControlActivoInput.id, updateControlActivoInput);
  }

  @Mutation(() => ControlActivo)
  removeControlActivo(@Args('id', { type: () => Int }) id: number) {
    return this.controlActivoService.remove(id);
  }
}
