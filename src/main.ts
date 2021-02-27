import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo/todo.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'


async function bootstrap() {
  const app = await NestFactory.create(TodoModule);

  const options =  new DocumentBuilder()
    .setTitle('Todo list microservice API')
    .setDescription('Todo list microservice API documentation')
    .setVersion('1.0')
    .build();
    
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('todo-list', app, document);
    await app.listen(3000);
}
bootstrap();
