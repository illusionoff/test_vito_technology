import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindAuthorIdDto {
  @Field()
  _id: string;
}
