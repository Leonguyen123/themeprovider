import { Injectable } from '@nestjs/common';

type User = {
    userId: number
    email: string
    username: string
    password: string
}

@Injectable()
export class UserService {
    private readonly users : User[] = [
        {
          userId: 1,
          username: 'john',
          email: 'nguyenhoangthang633@gmail.com',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          email: 'nguyenhoangthang634@gmail.com',
          password: 'guess',
        },
    ];

    async findOne(email: string): Promise<User>{
        return this.users.find(val => val.email === email)
    }
}
