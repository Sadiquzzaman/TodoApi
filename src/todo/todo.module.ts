import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoEntity } from "src/entities/todo.entity";
import { TypeOrmConfigModule } from 'src/type-orm/type-orm-config.module';
import { TodoController } from "./controllers/todo.controller";
import { TodoService } from "./services/todo.services";

@Module({
    imports:[
        TypeOrmModule.forFeature([TodoEntity]),
        TypeOrmConfigModule
],
    controllers:[TodoController],
    providers:[TodoService],
})


export class TodoModule{}