import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
