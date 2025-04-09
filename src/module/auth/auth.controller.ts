import { Body, Controller, Post, } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enum/swagger.consumes';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
@ApiTags("Auth")
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('user_existent')
  @ApiConsumes(SwaggerConsumes.UrlEncode , SwaggerConsumes.Json)
  userExistent(@Body() authDto : AuthDto) {
    return this.authService.userExistent(authDto);
  }
  
}
  