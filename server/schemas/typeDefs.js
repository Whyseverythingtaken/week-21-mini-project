const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Matchup {
    _id: ID
    tech1_votes: Int
    tech2_votes: Int
    tech1: String!
    tech2: String!
  }

  type Query {
    matchups: [Matchup]
  }
`;

module.exports = typeDefs;
