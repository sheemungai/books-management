import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bookreview {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  content: string;
  @Column()
  rating: number;
  @Column()
  created_at: Date;
}
