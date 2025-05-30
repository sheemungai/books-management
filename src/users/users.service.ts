import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll() {
    return this.profileRepository.find();
  }

  async findOne(id: number): Promise<User | string> {
    return await this.userRepository
      .findOne({
        where: { id: id },
        relations: ['profile'],
      })
      .then((user) => {
        if (!user) {
          return `No user found with id ${id}`;
        }
        return user;
      })
      .catch((error) => {
        console.error('Error finding user:', error);
        throw new Error(`Failed to find user with id ${id}`);
      });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.profileRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.profileRepository.delete(id);
  }
}
