import { Resolver, Query, ResolveField, Parent, Mutation, Args } from '@nestjs/graphql';
import { BookService } from '../book/book.service';
import { Author } from './author.schema';
import { AuthorService } from './author.service';
import { FindAuthorIdDto } from './dto/find-author-id.dto';
import { FindAuthorNameDto } from './dto/find-author-name.dto';
import { ListAuthorDto } from './dto/list-author.dto';
import { CreateAuthorDto } from './dto/create-author.dto';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private authorsService: AuthorService, private bookService: BookService) {}

  @Query(() => [Author])
  async authors() {
    return this.authorsService.findMany();
  }

  @Query(() => Author)
  async findAuthorId(@Args('input') { _id }: FindAuthorIdDto) {
    return this.authorsService.findById(_id);
  }

  @Query(() => [Author])
  async findAuthorName(@Args('input') { name }: FindAuthorNameDto) {
    return this.authorsService.findByName(name);
  }

  @Query(() => [Author])
  async listAuthors(@Args('Input') listAuthorsInput: ListAuthorDto) {
    return this.authorsService.authorsList(listAuthorsInput);
  }

  @Mutation(() => Author)
  async createAuthor(@Args('input') input: CreateAuthorDto) {
    return this.authorsService.createAuthor(input);
  }

  @ResolveField()
  async books(@Parent() parent: Author) {
    return this.bookService.findByAuthorId(parent._id);
  }
}
