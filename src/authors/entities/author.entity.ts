import { Book } from 'src/books/entities/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Author {
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

  @OneToMany('Book', (book: Book) => book.author)
  books: Book[];
}
