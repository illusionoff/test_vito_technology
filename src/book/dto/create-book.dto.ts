import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookDto {
  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field()
  author: string;
}
