const { ApolloServer } = require('apollo-server')
const config = require('./config')

const server = new ApolloServer(config)

server
  .listen(process.env.PORT || 4000)
  .then(({ url }) => console.log(`Server is running on ${url}`))