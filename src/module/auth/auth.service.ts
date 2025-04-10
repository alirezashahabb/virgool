import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { isEmail, isMobilePhone } from 'class-validator';
import { AuthDto } from './dto/auth.dto';
import { AuthMethod } from './enum/methos';
import { AuthType } from './enum/type';


@Injectable()
export class AuthService {
  userExistent(authDto: AuthDto) {
    const { method, type, username } = authDto;
    switch (type) {
      case AuthType.Login:
        return this.login(method, username);
      case AuthType.Register:
        return this.register(method, username);
      default:
        throw new UnauthorizedException();
    }
  }



  login(method: AuthMethod, userName: String) {

    return this.userNameValidator(method, userName);
  }

  register(method: AuthMethod, userName: String) {
    return this.userNameValidator(method, userName);
  }

  userNameValidator(method: AuthMethod, userName: String) {
    switch (method) {
      case AuthMethod.Email:
        if (isEmail(userName)) return userName;
        throw new BadRequestException('ایمیل نامعتبر است');
      case AuthMethod.Phone:
        if (isMobilePhone(userName, "fa-IR")) return userName;
        throw new BadRequestException('شماره تلفن نامعتبر است');
      case AuthMethod.Username:
        return userName;
      default:
        throw new UnauthorizedException('متد نامعتبر است');
    }
  }
}


