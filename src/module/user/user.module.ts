import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([UserEntity , ProfileEntity])

  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
