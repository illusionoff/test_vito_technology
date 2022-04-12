const query = `
{
  books {
    _id
    title
    isbn
    author {
          _id
          name
          }
    }
}`;

export { query };
