const database = require('./database-connection')

const getAll = () => {
  return database('dog_breeds').select()
}


module.exports = {
  getAll,
}