import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './book.schema';
import { ListBookDto } from './dto/list-book.dto';
import * as books from '../data/books.json';

@Injectable()
export class BookService {
  books: Partial<Book>[];
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {
    this.books = books;
  }

  async findMany() {
    return this.bookModel.find().lean();
  }

  async findById(id) {
    return this.bookModel.findById(id).lean();
  }

  async findByName(title) {
    return this.bookModel.find({ title: title }).lean();
  }

  async booksList(paginationQuery: ListBookDto) {
    const { limit, offset } = paginationQuery;
    return this.bookModel.find().skip(offset).limit(limit).exec();
  }

  async createBook(book) {
    return this.bookModel.create(book);
  }

  async findByAuthorId(authorId) {
    return this.bookModel.find({ author: authorId });
  }

  async createAllBooks(findManyIdAuthors) {
    const result = await books.map((item) => {
      return {
        title: item.title,
        isbn: item.isbn,
        author: findManyIdAuthors[item.author - 1]._id,
      };
    });
    await this.bookModel.collection.insertMany(result);
    return 'Successful database insert ';
  }
}
