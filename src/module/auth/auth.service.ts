import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmail, isMobilePhone } from 'class-validator';
import { Repository } from 'typeorm';
import { OtpEntity } from '../user/entities/otp.entity';
import { ProfileEntity } from '../user/entities/profile.entity';
import { UserEntity } from '../user/entities/user.entity';
import { AuthDto } from './dto/auth.dto';
import { AuthMethod } from './enum/methos';
import { AuthType } from './enum/type';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @InjectRepository(ProfileEntity) private profilerepositroy: Repository<ProfileEntity>,
    @InjectRepository(OtpEntity) private otpRepository: Repository<OtpEntity>

  ) {

  }
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

  login(methods: AuthMethod, userName: string) {
    return this.userNameValidator(methods, userName);
  }

  register(methods: AuthMethod, userName: string) {
    return this.userNameValidator(methods, userName);
  }

  userNameValidator(method: AuthMethod, userName: string) {
    switch (method) {
      case AuthMethod.Email:
        if (isEmail(userName)) return userName;
        throw new BadRequestException('ایمیل نا معتبر هست');
      case AuthMethod.Phone:
        if (isMobilePhone(userName, "fa-IR")) return userName;
        throw new BadRequestException('شماره موبایل نامعتبر هست');
      case AuthMethod.Username:
        return userName;
      default:
        throw new UnauthorizedException('نام کاربرب وجود ندارد');
    }
  }
}


