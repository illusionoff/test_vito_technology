const query = `
query findAuthorName($input:FindAuthorNameDto!) {
	findAuthorName(input: $input) {
		_id
		name
		books {
          _id
          title
					isbn
          }
	}
}`;

const variables = `
{
	"input": {
		"name": "Douglas Adams"
	}
}`;

export { query, variables };
