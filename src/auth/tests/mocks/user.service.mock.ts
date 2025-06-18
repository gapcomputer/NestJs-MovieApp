import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';

export class MockUserService {
  private users: User[] = [];

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User;
    
    this.users.push(newUser);
    return newUser;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null;
  }
}