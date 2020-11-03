var mongoose = require("mongoose");

//mongoose.connect('mongodb://localhost:27017/projeto03', { useUnifiedTopology: true, useNewUrlParser: true, });

const db =
  "mongodb+srv://db_user:db_user@cluster0.q3wl4.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose
  .connect(db, {
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true 
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

var userSchema = new mongoose.Schema(
  {
    id: String,
    token: String,
    email: String,
    password: String,
    tpUser: String,
  },
  { collection: "usuarios", useUnifiedTopology: true }
);

var pokemonSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    preco: String,
    qtd: String,
  },
  { collection: "pokemon", useUnifiedTopology: true }
);

module.exports = {
  Mongoose: mongoose,
  UserSchema: userSchema,
  PokemonSchema: pokemonSchema,
};
