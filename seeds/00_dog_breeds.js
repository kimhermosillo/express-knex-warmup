
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dog_breeds').del()
    .then(function () {
      // Inserts seed entries
      return knex('dog_breeds').insert([
        {breed: 'Mini Aussie', popularity: 10},
        {breed: 'Cane Corso', popularity: 10},
        {breed: 'Dalmatian', popularity: 5},
        {breed: 'Italian Greyhound', popularity: 5},
      ])
    })
}
