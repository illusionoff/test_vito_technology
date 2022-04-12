import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from '../book/book.schema';

export type AuthorDocument = Author & mongoose.Document;

@Schema()
@ObjectType()
export class Author {
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' } })
  @Field(() => [Book])
  books: Book[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);

AuthorSchema.index({ name: 1 }, { unique: true });
