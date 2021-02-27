import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, VersionColumn } from "typeorm";

@Entity({name:'todos', schema:'public'})
export class TodoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @VersionColumn()
    version: number;

    @Column({type:'varchar', name:'title', length:50})
    title: string

    @Column({type:'text', name:'description'})
    description: string

    @Column({
        type:'time without time zone',
        name:'created_at',
        nullable: true
    })
    createdAt: Date | null;

    @Column({
        type:'time without time zone',
        name:'updated_at',
        nullable: true
    })
    updatedAt: Date | null;
}