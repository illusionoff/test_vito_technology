const query = `
query findBookName($input:FindBookNameDto!) {		
	findBookName(input: $input) {
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
		"title": "The Player's Handbook: The Ultimate Guide on Dating and Relationships"
	}
}`;

export { query, variables };
