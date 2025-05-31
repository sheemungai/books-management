import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Book } from 'src/books/entities/book.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;

  @ManyToMany(() => Book, (book) => book.categories)
  @JoinTable()
  books: Book[];
}
