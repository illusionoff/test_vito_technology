import { Controller, Get } from '@nestjs/common';
import { AuthorService } from '../author/author.service';
import { BookService } from '../book/book.service';

@Controller('init-database')
export class InitDatabaseController {
  constructor(private authorsService: AuthorService, private bookService: BookService) {}
  @Get()
  async getCreateAuthors(): Promise<string> {
    const findManyIdAuthors = await this.authorsService.createAllAuthors();
    return this.bookService.createAllBooks(findManyIdAuthors);
  }
}
