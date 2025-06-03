import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtpEntity } from './entities/otp.entity';
import { ProfileEntity } from './entities/profile.entity';
import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([UserEntity , ProfileEntity , OtpEntity])

  ],
  controllers: [UserController],
  providers: [UserService],
  exports : [UserService , TypeOrmModule,]
})
export class UserModule {}
