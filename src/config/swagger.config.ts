import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function swaggerConfigInit(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Virgool Api')
    .setDescription('The Virgool API description')
    .setVersion('1.0')

    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/swagger', app, swaggerDocument);
}  