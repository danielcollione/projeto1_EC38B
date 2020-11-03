module.exports = () => {
    const controller = {};

    var db = require("../db/db");

    var Pokemons = db.Mongoose.model('pokemon', db.PokemonSchema, 'pokemon');

    controller.getAllPokemon = async (req, res) => {

      await Pokemons.find().exec(
        async function (e, docs) {
          console.log(" ===== docs ====", docs);
          res.status(200).json( docs )
        }
      );
    }

    controller.clearAll = async (req, res) => {
    
      await Pokemons.deleteMany();
      res.status(200).json( 0 )
    }

    controller.setAllPokemon = async (req, res) => {
      
      let pokemon = req.body.pokemon;

      for(let p of pokemon){

        var poke = new Pokemons({ name: p.pokemon.name, preco: '5', qtd: '100' });
        await poke.save(function (err) {
          if (err) {
            console.log("Error! " + err.message);
          }
          else {
          }
        });
      }
      res.status(200).json(0)
    }

    controller.setPokemon = async (req, res) => {
      let name = req.body.name;
      let preco = req.body.preco;
      let qtd = req.body.qtd;

      var poke = new Pokemons({ name: name, preco: preco, qtd: qtd});
      poke.save(function (err) {
        if (err) {
          console.log("Error! " + err.message);
          res.status(200).json(1)
        }
        else {
          res.status(200).json(0)
        }
      });

    }

    return controller;
}