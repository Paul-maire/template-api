const {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime,
} = require("graphql-iso-date")

module.exports = {
  typeDefs: require("./schema"),
  resolvers: {
    JSON: require("graphql-type-json"),
    GraphQLDate,
    GraphQLTime,
    GraphQLDateTime,

    Query: require("./queries"),
    Mutation: require("./mutations"),
    ...require("./types"),
  },
  mocks: require("./mocks"),
  mockEntireSchema: true
}