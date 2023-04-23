const graphURL = "https://countries.trevorblades.com/graphql";

function fetchGraphQLQuery() {
  const query = `
  query {
    continents {
      name
      countries {
        name
      }
    }
  }
  `;
  return fetch(graphURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  }).then((response) => {
    return response.json();
  });
}

export default fetchGraphQLQuery;
