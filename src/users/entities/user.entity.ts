/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Profile } from '../../profiles/entities/profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ default: true })
  isActive: boolean;

  @Column()
  created_at: Date;
  @Column()
  update_at: Date;
  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;
}
