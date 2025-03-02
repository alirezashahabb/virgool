import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';


@Injectable()
export class AuthService {
  userExistent(authDto : AuthDto) {
    return 'This action returns all user_existent';
  }
}
