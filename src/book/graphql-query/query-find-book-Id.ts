const query = `
query findBookId($input:FindBookIdDto!) {		
	findBookId(input: $input) {
		_id
		title
		isbn
		author {
			_id
			name
		}
	}
}`;

const variables = `
{
	"input": {
		"_id": "625449d3ddbc254a58941fc7"
	}
}`;

export { query, variables };
