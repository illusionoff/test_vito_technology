import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { Author, AuthorDocument } from './author.schema';
import { ListAuthorDto } from './dto/list-author.dto';
import * as autors from '../data/author.json';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private authorModel: Model<AuthorDocument>) {}

  async findById(id) {
    return this.authorModel.findById(id).lean();
  }

  async findByName(name) {
    return this.authorModel.find({ name }).lean();
  }

  async findMany() {
    return this.authorModel.find().lean();
  }

  async authorsList(paginationQuery: ListAuthorDto) {
    const { limit, offset } = paginationQuery;
    return this.authorModel.find().skip(offset).limit(limit).exec();
  }

  async createAuthor(input) {
    return this.authorModel.create(input);
  }

  async createAllAuthors() {
    const resultFind = [];
    const result = await autors.map((item) => {
      const _id = new mongoose.Types.ObjectId();
      resultFind.push({ _id: _id, id: item.id });
      const string = { name: item.name, _id: _id };
      return string;
    });
    await this.authorModel.collection.insertMany(result);
    return resultFind;
  }
}
