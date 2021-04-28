exports.up = knex => knex.schema.createTable('templates', t => {
	t.increments('id').index()
})

exports.down = knex => knex.schema.dropTable('templates')
