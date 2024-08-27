import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PracticeService } from './practice.service';
import { Prisma } from '@prisma/client';


@Controller('practice')
export class PracticeController {
  constructor(private readonly practiceService: PracticeService) {}

  @Post()
  create(@Body() createPracticeDto:Prisma.practiceCreateInput) {
    return this.practiceService.create(createPracticeDto);
  }

  @Get()
  findAll(@Query('role') role?:'USER' | 'ADMIN') {
    return this.practiceService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.practiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePracticeDto:Prisma.practiceUpdateInput) {
    return this.practiceService.update(+id, updatePracticeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practiceService.remove(+id);
  }
}
