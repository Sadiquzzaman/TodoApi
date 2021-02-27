import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "src/entities/todo.entity";
import { DeleteResult, Repository } from "typeorm";
import { TodoDto } from "src/dto/todo.dto"

@Injectable()
export class TodoService{
    private readonly logger =new Logger();
    constructor(
        @InjectRepository(TodoEntity)
        private readonly toDoRepository: Repository<TodoEntity>
    ){}

    async getAll(): Promise<TodoEntity[]>{
        const getTodos = await this.toDoRepository.find();
        return getTodos;
    }

    async createNew(
        dto  : TodoDto,
        ): Promise<TodoEntity | TodoEntity[]> {
        const createTodos = await this.toDoRepository.create(dto);
        await this.toDoRepository.save(createTodos);
        return createTodos;
    }

    async getOne(
        id: string,
        ): Promise<TodoEntity> {
        const fixedOne = await this.toDoRepository.findOne(id);
        return fixedOne;
    }

    async update(
        id   : string,
        dto : Partial<TodoDto>
    ):  Promise<TodoEntity> {
        const savedTodos = await this.getOne(id);
        const updatedTodos = await this.toDoRepository.save({
            ...savedTodos, 
            ...dto
        });
        return updatedTodos;
    }

    async deleteById(
        id : string,
    ) : Promise <DeleteResult> {
        const getTodos = await this.getOne(id);
        const deletedTodos = await this.toDoRepository.delete(getTodos);
        return deletedTodos;
    }
}