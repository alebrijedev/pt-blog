import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogService } from "./blog.service";
import { BlogController } from "./blog.controller";
import { Entry } from "./blog.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Entry])],
    providers: [BlogService],
    controllers: [BlogController]
})
export class BlogModule {}