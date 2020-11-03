var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/projeto03', { useUnifiedTopology: true, useNewUrlParser: true, });

var userSchema = new mongoose.Schema({
  id: String,
  token: String,
  email: String,
  password: String,
  tpUser: String
}, { collection: 'usuarios', useUnifiedTopology: true }
);

var pokemonSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    preco: String,
    qtd: String
  }, { collection: 'pokemon', useUnifiedTopology: true }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema, PokemonSchema: pokemonSchema }