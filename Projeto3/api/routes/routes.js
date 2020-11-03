module.exports = app => {
  const login = require('../controllers/controllerLogin')();
  const pokemon = require('../controllers/controllerPokemon')();



  app.route('/api/login').post(login.login);

  app.route('/api/register').post(login.signup);
  app.route('/api/adm/register').post(login.signupAdm);

  app.route('/getPokemons').get(pokemon.getAllPokemon);
  app.route('/postPokemons').post(pokemon.setAllPokemon);
  app.route('/novoPokemon').post(pokemon.setPokemon);
  app.route('/clearAll').post(pokemon.clearAll);
  
  

}