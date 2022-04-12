const query = `
mutation createAuthor($input: CreateAuthorDto!) {
	createAuthor(input: $input) {
		_id
	  name
	}
}`;

const variables = `
{
	"input": {
		"name": "Aliaksandr Siniakou"
	}
}`;

export { query, variables };
