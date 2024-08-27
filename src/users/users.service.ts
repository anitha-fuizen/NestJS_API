import { Injectable, NotFoundException } from '@nestjs/common';
import { CreteUserDto } from './Dto/create-user.dto';
import { UpdateUserDto } from './Dto/update-user.dto';

@Injectable()
export class UsersService {
    private users=[
        {
            "id":1,
            "name":"anitha",
            "role":"USER"
        },
        {
            "id":2,
            "name":"anu",
            "role":"USER"
        },
        {
            "id":3,
            "name":"fayu",
            "role":"ADMIN"
        }
    ]

    // findAll(){
    //     return this.users
    // }

    findAll(role?:'USER' | 'ADMIN'){
      if(role){
    const rolearray= this.users.filter(user => user.role === role)
    if(rolearray.length=== 0) throw new NotFoundException('userrole not found')
     return rolearray
    
      }
      return this.users
    }

    findOne(id:number){
         const user=this.users.find(user => user.id === id)
         if(!user) throw new NotFoundException('user not found')
         return user
    }

create(user:CreteUserDto){
   const userbyasc=[...this.users].sort((a,b)=> b.id - a.id)
   const newuser={
    id:userbyasc[0].id+1,
    ...user
   }
   this.users.push(newuser )
   return newuser
}

update(id:number ,updateuser:UpdateUserDto){
   this.users=this.users.map(user=>{
    if(user.id == id){
        return {...user,...updateuser}
    }
    return user
   })

   return this.findOne(id)
}

delete(id:number){
    const removeuser=this.findOne(id)

    this.users=this.users.filter(user=>user.id !== id)
    return removeuser
}
}
