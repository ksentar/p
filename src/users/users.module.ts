import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { FireormModule } from 'nestjs-fireorm';
import { User } from '../entity/user.entity';

@Module({
  imports: [FireormModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
