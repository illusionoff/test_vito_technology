const query = `
query listBooks($listBookInput:ListBookDto!) {
	listBooks(Input: $listBookInput) {
    _id
    title
		isbn       
  }
}`;

const variables = `
{
	"listBookInput": {
		"limit": 3,
		"offset": 5
	}
}`;

export { query, variables };
