import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindAuthorNameDto {
  @Field()
  name: string;
}
