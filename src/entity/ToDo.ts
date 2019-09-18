import {Entity, PrimaryGeneratedColumn, Column, Timestamp} from "typeorm";

@Entity()
export class ToDo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    completed: boolean;

    @Column("timestamp",{nullable: true})
    created_at;

    @Column("timestamp",{nullable: true})
    completed_at;

    @Column("text")
    notes;

    @Column()
    category: string;

}
