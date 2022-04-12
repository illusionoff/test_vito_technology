<a id="anchor"></a>
##### README.markdown

Test task of the company Vito Technology
=============


### Testing the application on the server

##### app availability check:
* http://178.20.42.150.sslip.io:3012

##### GraphQL validation by address:
* http://178.20.42.150.sslip.io:3012/graphql

##### GraphQL query examples:
* [src\author\graphql-query](https://github.com/illusionoff/test_vito_technology/tree/main/src/author/graphql-query)
*  [src\book\graphql-query](https://github.com/illusionoff/test_vito_technology/tree/main/src/book/graphql-query)
##### I am using Insomnia app for GraphQL testing



### How to run the application? 

##### The application was launched on nodejs  v 14.15, npm v 6.14 

##### application start:
* git clone https://github.com/illusionoff/test_vito_technology.git
* go to project folder: test_vito_technology
* npm i		or yarn install
* npm run dev

##### app availability check:
* HOST_NAME:3012
* Response: “Test task ООО Vito Technology. Siniakou Aliaksandr”

##### Database initialization:
* HOST_NAME:3012/init-database

##### GraphQL queries are available at the link:
* HOST_NAME:3012/graphql


### When running the application on a real server:


##### nginx settings: 
* test_vito_technology/src/config/nginx/
* npm run build
* npm start

### How to start a database?

* Used database MongoDB, cloud server mongodb.com


##### Run configuration as a string: 
* “mongodb+srv://LOGIN:PASSWORD@HOST_NAME/DB_NAME”



### How to set up the necessary indexes in the database?

##### Indexes in the database are configured automatically when the database is initialized by clicking on the link:
* HOST:3012/init-database


#### Indexes are registered in:

Puth | Description
:----|:---------
src\author\author.schema.ts | AuthorSchema.index({ name: 1 }, { unique: true });
 : |  Index by author name
src\book\book.schema.ts | BookSchema.index({ author: 1 });
: | Index for linking authors and books
: | BookSchema.index({ title: 1 });
: | Index by book title

[Up](#anchor)