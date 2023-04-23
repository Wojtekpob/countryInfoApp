import React from "react";

const graphURL = "https://countries.trevorblades.com/graphql";

function fetchGraphQLQuery(query) {
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
