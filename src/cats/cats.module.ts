import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/db/user.entity';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule { }
