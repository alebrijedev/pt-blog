import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Entry } from "./blog.entity"
import { CreateEntry } from "./blog.dto"

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Entry)
        private entryRepository: Repository<Entry>,
    ) {}

    create(createEntry: CreateEntry): Promise<Entry> {
        const newEntry = this.entryRepository.create(createEntry)
        return this.entryRepository.save(newEntry)
    }

    findOne(id: number): Promise<Entry> {
        return this.entryRepository.findOneBy({id: id})
    }

    async remove(id: number): Promise<void> {
        await this.entryRepository.delete(id)
    }

    async findAll(): Promise<Entry[]> {
        return this.entryRepository.find()
    }
}