import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from 'src/profiles/entities/profile.entity';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(createProfileDto: CreateProfileDto) {
    const profile = this.profileRepository.create(createProfileDto);
    return this.profileRepository.save(profile);
  }

  async findAll() {
    return await this.profileRepository
      .find()
      .then((profiles) => {
        if (profiles.length === 0) {
          return 'No profiles found';
        }
        return profiles;
      })
      .catch((error) => {
        console.error('Error finding profiles:', error);
        throw new Error('Failed to find profiles');
      });
  }

  async findOne(id: number): Promise<Profile | string> {
    return await this.profileRepository
      .findOne({
        where: { id: id },
      })
      .then((profile) => {
        if (!profile) {
          return `No profile found with id ${id}`;
        }
        return profile;
      })
      .catch((error) => {
        console.error('Error finding profile:', error);
        throw new Error(`Failed to find profile with id ${id}`);
      });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    return await this.profileRepository.update(id, updateProfileDto);
  }

  async remove(id: number) {
    return await this.profileRepository.delete(id);
  }
}
