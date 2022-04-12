const query = `
{
  authors {
  _id
  name
  books {
        _id
        title
				isbn
        }
  }
}`;

export { query };
