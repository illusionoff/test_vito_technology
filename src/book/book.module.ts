import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { AuthorService } from 'src/author/author.service';
import { Author, AuthorSchema } from 'src/author/author.schema';
import { Book, BookSchema } from './book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Author.name, schema: AuthorSchema },
    ]),
  ],
  providers: [BookResolver, BookService, AuthorService],
  exports: [BookService],
})
export class BookModule {}
