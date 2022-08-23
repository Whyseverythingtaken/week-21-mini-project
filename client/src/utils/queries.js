import { gql } from "@apollo/client";

export const QUERY_MATCHUPS = gql`
  query Matchups {
    matchups {
      _id
      tech1_votes
      tech2_votes
      tech1
      tech2
    }
  }
`;
