import { Resolver, Query, ResolveField, Parent, Args, Mutation } from '@nestjs/graphql';
import { AuthorService } from '../author/author.service';
import { Author } from '../author/author.schema';
import { Book } from './book.schema';
import { BookService } from './book.service';
import { FindBookIdDto } from './dto/find-book-Id.dto';
import { FindBookNameDto } from './dto/find-book-name.dto';
import { ListBookDto } from './dto/list-book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Resolver(() => Book)
export class BookResolver {
  constructor(private bookService: BookService, private authorService: AuthorService) {}

  @Query(() => [Book])
  async books() {
    return this.bookService.findMany();
  }

  @Query(() => Book)
  async findBookId(@Args('input') { _id }: FindBookIdDto) {
    return this.bookService.findById(_id);
  }

  @Query(() => [Book])
  async findBookName(@Args('input') { title }: FindBookNameDto) {
    return this.bookService.findByName(title);
  }

  @Query(() => [Book])
  async listBooks(@Args('Input') listBooksInput: ListBookDto) {
    return this.bookService.booksList(listBooksInput);
  }

  @Mutation(() => Book)
  async createBook(@Args('input') book: CreateBookDto) {
    return this.bookService.createBook(book);
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.authorService.findById(book.author);
  }
}
