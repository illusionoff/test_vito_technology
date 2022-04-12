import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { InitDatabaseController } from './init-database/init-database.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/config/.${process.env.NODE_ENV}.env`,
      // envFilePath: `.development.env`,
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_STRING),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    AuthorModule,
    BookModule,
  ],
  controllers: [AppController, InitDatabaseController],
  providers: [AppService],
})
export class AppModule {}
