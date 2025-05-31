import { Bookreview } from 'src/bookreviews/entities/bookreview.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Author } from 'src/authors/entities/author.entity';
import { Category } from 'src/categories/entities/category.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  publicationYear: Date;
  @Column()
  IsAvailable: boolean;

  @OneToMany(() => Bookreview, (bookreview) => bookreview.book, {
    onDelete: 'CASCADE',
  })
  bookreviews: Bookreview[];

  @ManyToOne('Author', (author: Author) => author.books, {
    onDelete: 'CASCADE',
  })
  author: Author;

  @ManyToMany(() => Category, (category) => category.books)
  categories: Category[];
}
