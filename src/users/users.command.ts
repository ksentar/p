import { Injectable } from '@nestjs/common';
import { Command, Positional } from 'nestjs-command';
import { UsersService } from './users.service';

@Injectable()
export class UsersCommand {
  constructor(private usersService: UsersService) {}

  @Command({
    command: 'users:test-select',
    describe: '',
  })
  async main() {
    await this.usersService.findOne();
  }
}
