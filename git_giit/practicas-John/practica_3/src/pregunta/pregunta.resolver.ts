import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PreguntaService } from './pregunta.service';
import { Pregunta } from './entities/pregunta.entity';
import { CreatePreguntaInput } from './dto/create-pregunta.input';
import { UpdatePreguntaInput } from './dto/update-pregunta.input';

@Resolver(() => Pregunta)
export class PreguntaResolver {
  constructor(private readonly preguntaService: PreguntaService) {}

  @Mutation(() => Pregunta)
  createPregunta(@Args('createPreguntaInput') createPreguntaInput: CreatePreguntaInput) {
    return this.preguntaService.create(createPreguntaInput);
  }

  @Query(() => [Pregunta], { name: 'pregunta' })
  findAll() {
    return this.preguntaService.findAll();
  }

  @Query(() => Pregunta, { name: 'pregunta' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.preguntaService.findOne(id);
  }

  @Mutation(() => Pregunta)
  updatePregunta(@Args('updatePreguntaInput') updatePreguntaInput: UpdatePreguntaInput) {
    return this.preguntaService.update(updatePreguntaInput.id, updatePreguntaInput);
  }

  @Mutation(() => Pregunta)
  removePregunta(@Args('id', { type: () => Int }) id: number) {
    return this.preguntaService.remove(id);
  }
}
