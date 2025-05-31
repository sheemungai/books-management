import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Book } from '../../books/entities/book.entity';

@Entity()
export class Bookreview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  rating: number;

  @Column()
  created_at: Date;

  @ManyToOne('User', (user: User) => user.bookreviews, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Book, (book) => book.bookreviews, {
    onDelete: 'CASCADE',
  })
  book: Book;
}
