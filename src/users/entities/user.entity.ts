/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column()
  isActive: boolean;

  @Column()
  created_at: Date;
  @Column()
  update_at: Date;
}
