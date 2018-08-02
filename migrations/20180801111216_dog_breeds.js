
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dog_breeds', (table) => {
    table.increments()
    table.text('breed')
    table.integer('popularity')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dog_breeds')

}
