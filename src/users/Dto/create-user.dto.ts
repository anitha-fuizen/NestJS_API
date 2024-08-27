import { IsEnum, IsNotEmpty, IsString } from 'class-validator';


export class CreteUserDto{
    @IsString()
    @IsNotEmpty()
    name:string;
 
    @IsEnum(['USER' , 'ADMIN'],{
        message:'valid role required'
    })
    role:'USER' | 'ADMIN'
}