import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindBookNameDto {
  @Field()
  title: string;
}
