import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Entry {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    author: string

    @Column("date")
    pubDate: Date

    @Column("text")
    content: string
}