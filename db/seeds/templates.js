const templates = []

exports.seed = knex => {
    return knex('templates')
        .del()
        .then(_ => knex('templates').insert(templates))
}
