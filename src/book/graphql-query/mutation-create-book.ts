const query = `
mutation createBook($input: CreateBookDto!) {
	createBook(input: $input) {
		_id
		isbn
		title
		author {
			_id
		}
	}
}`;

const variables = `
{
	"input": {
		"title": "test Name Book",
		"isbn": "231312321321321",
		"author": "62547b5fba68582314a4d4b0"
	}
}`;

export { query, variables };
