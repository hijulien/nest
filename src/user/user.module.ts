import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './entities/user.providers';
import { DatabaseModule } from 'src/database/database.modules';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService,...userProviders],
})
export class UserModule {}
