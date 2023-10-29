import { Body, Controller, Delete, HttpCode, HttpException, HttpStatus, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { BlogService } from "./blog.service";
import { Entry } from "./blog.entity";
import { CreateEntry } from "./blog.dto";

@Controller("entries")
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

    @Get()
    findAll(): Promise<Entry[]> {
        return this.blogService.findAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() newEntry: CreateEntry): Promise<Entry> {
        return this.blogService.create(newEntry)
    }

    @Get(":id")
    async findOne(@Param("id", ParseIntPipe) id: number): Promise<Entry> {
        const dbObj = await this.blogService.findOne(id)
        if (!dbObj) {
            throw  new HttpException("Not found", HttpStatus.NOT_FOUND)
        }
        return dbObj
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param("id", ParseIntPipe) id: number): Promise<void> {
        return this.blogService.remove(id)
    }
}