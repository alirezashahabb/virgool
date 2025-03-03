import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TypeOrmConfig } from 'src/config/type_orm_config';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd(), '.env'),

    }),
    TypeOrmModule.forRoot(TypeOrmConfig(),),
    AuthModule,
    UserModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
