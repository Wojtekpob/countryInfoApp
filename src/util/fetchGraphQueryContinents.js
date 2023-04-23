import React from "react";
import fetchGraphQLQuery from "./fetchGraphQLQuery";

function fetchGraphQueryContinents() {
  const query = `
  query {
    continents {
      name
      }
    }
  `;
  return fetchGraphQLQuery(query);
}

export default fetchGraphQueryContinents;
