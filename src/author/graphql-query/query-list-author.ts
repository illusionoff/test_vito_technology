const query = `
query listAuthors($listAuthorInput:ListAuthorDto!) {
	listAuthors(Input: $listAuthorInput) {
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
	"listAuthorInput": {
		"limit": 3,
		"offset": 99
	}
}`;

export { query, variables };
