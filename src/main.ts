import { NestFactory } from '@nestjs/core';
import { swaggerConfigInit } from './config/swagger.config';
import { AppModule } from './module/app/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const{PORT} = process.env;
  swaggerConfigInit(app);
  await app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}/swagger`);
  });
}
bootstrap();
    