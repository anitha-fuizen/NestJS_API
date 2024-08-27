import { Injectable } from '@nestjs/common';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { UpdatePracticeDto } from './dto/update-practice.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PracticeService {
  constructor (private readonly databaseService:DatabaseService){}
  create(createPracticeDto:Prisma.practiceCreateInput ) {
    return this.databaseService.practice.create({
      data:createPracticeDto
    })
  }

  findAll(role?:'USER' | 'ADMIN') {
   if(role) return this.databaseService.practice.findMany({
      where:{
        role,
      }
    })
    return this.databaseService.practice.findMany()
  }

  findOne(id: number) {
    return this.databaseService.practice.findUnique({
      where:{
        id,
      }
    })
  }

  update(id: number, updatePracticeDto: UpdatePracticeDto) {
    return this.databaseService.practice.update({
      where:{
        id,
      },
      data:updatePracticeDto

    })
  }

  remove(id: number) {
    return this.databaseService.practice.delete({
      where:{
        id,
      }
    })
  }
}
