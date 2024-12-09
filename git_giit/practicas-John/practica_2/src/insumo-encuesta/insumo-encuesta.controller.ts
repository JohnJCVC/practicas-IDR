import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsumoEncuestaService } from './insumo-encuesta.service';
import { CreateInsumoEncuestaDto } from './dto/create-insumo-encuesta.dto';
import { UpdateInsumoEncuestaDto } from './dto/update-insumo-encuesta.dto';

@Controller('insumo-encuesta')
export class InsumoEncuestaController {
  constructor(private readonly insumoEncuestaService: InsumoEncuestaService) {}

  @Post()
  create(@Body() createInsumoEncuestaDto: CreateInsumoEncuestaDto) {
    return this.insumoEncuestaService.create(createInsumoEncuestaDto);
  }

  @Get()
  findAll() {
    return this.insumoEncuestaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insumoEncuestaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInsumoEncuestaDto: UpdateInsumoEncuestaDto) {
    return this.insumoEncuestaService.update(+id, updateInsumoEncuestaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insumoEncuestaService.remove(+id);
  }
}
