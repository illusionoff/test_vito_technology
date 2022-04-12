const query = `
query author($input:FindAuthorIdDto!) {
	findAuthorId(input: $input) {
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
		"_id": "625449d3ddbc254a58941f8c"
	}
}`;

export { query, variables };
