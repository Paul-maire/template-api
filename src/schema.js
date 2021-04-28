const { gql } = require('apollo-server')

module.exports = gql`
  scalar JSON
  scalar GraphQLDate
  scalar GraphQLTime
  scalar GraphQLDateTime

  type Query {
    template(id: Int!): Template
    templates(id: Int!): [Template!]
  }

  type Mutation {
    saveTemplate(template: TemplateInput!): Template
  }

  type Template {
    id: Int!
  }
  input TemplateInput {
    id: Int!
  }
`