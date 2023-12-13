import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  findAll(): [User] {
    return [
      {
        id: 1,
        name: 'Test',
      },
    ];
  }
}
