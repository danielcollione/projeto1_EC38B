const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const cors       = require('cors');

module.exports = () => {
  const app = express();
  app.use(express.json()) // for parsing application/json
  app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  app.use(cors());
  require('../api/routes/routes')(app);


  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));
  
  // MIDDLEWARES
  app.use(bodyParser.json());

  return app;
};


