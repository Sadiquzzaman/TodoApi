import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TodoEntity } from "src/entities/todo.entity";

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type:'postgres',
                host:'localhost',
                port:5432,
                username:'postgres',
                password:'postgres',
                database:'postgres',
                schema:'public',
                synchronize: true,
                logging: true,
                entities:[TodoEntity],
            }),
            inject: [ConfigService],
        }),
    ],
})

export class TypeOrmConfigModule{}