const { Matchup } = require("../models");

const resolvers = {
  Query: {
    matchups: async () => {
      return await Matchup.find({});
    },
  },
};

module.exports = resolvers;
