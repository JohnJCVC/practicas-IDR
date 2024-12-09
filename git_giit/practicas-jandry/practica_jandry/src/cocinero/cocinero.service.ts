import { Injectable } from '@nestjs/common';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';

@Injectable()
export class CocineroService {
  create(createCocineroDto: CreateCocineroDto) {
    return 'This action adds a new cocinero';
  }

  findAll() {
    return `This action returns all cocinero`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cocinero`;
  }

  update(id: number, updateCocineroDto: UpdateCocineroDto) {
    return `This action updates a #${id} cocinero`;
  }

  remove(id: number) {
    return `This action removes a #${id} cocinero`;
  }
}
