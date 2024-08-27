import { Body, Controller, Delete, Get, Param, Patch, Post, Query ,ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreteUserDto } from './Dto/create-user.dto';
import { UpdateUserDto } from './Dto/update-user.dto';

@Controller('users')
export class UsersController {
    // @Get()
    //     findAll(){
    //        return []
    //     }

    constructor (private readonly usersService : UsersService){ }
    @Get()
        findAll(@Query('role') role?:'USER' | 'ADMIN'){
           return this.usersService.findAll(role)
        }
    @Get(":id")
        findOneById(@Param('id',ParseIntPipe) id:number){
            return this.usersService.findOne(id)
        }

    // @Get('USER')
    //   findAllInterns(){
    //     return this.usersService.findAll({role:'USER'})
    //   }

    @Post()
     create(@Body(ValidationPipe) user:CreteUserDto){
        return this.usersService.create(user)
     }

     @Patch(":id")
        update(@Param('id') id:string, @Body(ValidationPipe) userUpdate:UpdateUserDto){
            return this.usersService.update(+id,userUpdate)
        }
    @Delete(":id")
      delete(@Param('id',ParseIntPipe) id:number){
        return  this.usersService.delete(id)
      }
    }
    

