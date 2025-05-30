import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bio: string;

  @Column()
  avatar: string;

  @Column()
  dateOfBirth: Date;
  @Column()
  location: string;
  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
