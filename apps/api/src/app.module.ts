import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 15432,
      username: 'ptblog',
      password: 'ptblog',
      database: 'ptblog',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      synchronize: true
    }),
    BlogModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client/dist'),
    })
  ],
})
export class AppModule {}
