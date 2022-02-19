import { UsersService } from './users.service';
export declare class UsersCommand {
    private usersService;
    constructor(usersService: UsersService);
    main(): Promise<void>;
}
