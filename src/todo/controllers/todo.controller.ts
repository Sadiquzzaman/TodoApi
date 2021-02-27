import { Param, Query } from "@nestjs/common";
import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { TodoDto } from "src/dto/todo.dto";
import { TodoService } from "../services/todo.services";

@Controller('to-do')
export class TodoController {
    constructor(private readonly todoService : TodoService){}

    @Get()
    async getAll(){
        const getalltodos = this.todoService.getAll();
        return getalltodos;
    }

    @Post()
    async create(@Body() dto: TodoDto){
        const createnewtodo = this.todoService.createNew(dto);
        return createnewtodo;
    }

    @Get(':id')
    async getOne(@Param('id') id: string ){
        return this.todoService.getOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string,@Body() dto : TodoDto){
        const updatetodos = this.todoService.update(id, dto);
        return updatetodos;
    }

    @Delete(':id')
    async deleteById(@Param('id') id: string){
        const deletedtodos = this.todoService.deleteById(id);
        return deletedtodos;
    }
}