import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Author } from '../author/author.schema';

export type BookDocument = Book & mongoose.Document;

@Schema()
@ObjectType()
export class Book {
  @Field(() => ID)
  _id: number;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field()
  isbn: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Author.name })
  @Field(() => Author)
  author: Author | number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.index({ author: 1 });
BookSchema.index({ title: 1 });
