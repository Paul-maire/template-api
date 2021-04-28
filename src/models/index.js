const config = require("../../knexfile.js")
const knex = require("knex")(config)

module.exports = {
  Template: require("./template")(knex),
}
