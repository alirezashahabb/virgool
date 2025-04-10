import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString, Length } from "class-validator";
import { AuthMethod } from "../enum/methos";
import { AuthType } from "../enum/type";

export class AuthDto {
    @ApiProperty()
    @IsString()
    @Length(3, 50)
    username: string;
    @ApiProperty({enum : AuthType})
    @IsEnum(AuthType)
    type: string;
   
    @ApiProperty({enum : AuthMethod})
    @IsEnum(AuthMethod)
    method: AuthMethod;
}