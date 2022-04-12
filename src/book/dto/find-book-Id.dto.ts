import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindBookIdDto {
  @Field()
  _id: string;
}
