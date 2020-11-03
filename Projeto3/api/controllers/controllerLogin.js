module.exports = () => {
  var randtoken = require('rand-token');
  const controller = {};

  var db = require("../db/db");

  var Users = db.Mongoose.model('usuarios', db.UserSchema, 'usuarios');

  controller.clearAll = async (req, res) => {
    
    await Users.deleteMany();
  }

  controller.login = async (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    // console.log("SignIN email => ", email)
    // console.log("SignIN password => ", password)
    
    await Users.find({email:email, password:password}).lean().exec(
      async function (e, docs) {
        let usuario = docs[0];
        if(usuario){
          console.log("usuario => ", usuario)
          res.status(200).json( usuario );
        }else{
          res.status(200).json( " =========== email não cadastrado =========== " );
        }
      }
    );
  }

  controller.signup = async (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    console.log("SignUP email => ", email)
    console.log("SignUP password => ", password)

    let emailValido;

    if( req.body.email == undefined || email.length < 5){
      res.status(201).json( " =========== sem email =========== " )
    }else if(req.body.email == ""){
      res.status(201).json( " =========== sem senha =========== " )
    }else{
      await Users.find({email:email}).lean().exec(
        async function (e, docs) {
          emailValido = docs[0];
          if(!emailValido){
            var token = randtoken.generate(16);
            console.log("token", JSON.stringify(token))
            var user = new Users({ email: email, password: password, token:token, tpUser: '0' });
            user.save(function (err) {
              if (err) {
                console.log("Error! " + err.message);
                return err;
              }
              else {
                res.status(200).json( user )
              }
            });
          }else{
            res.status(200).json( " =========== email já cadastrado =========== " );
          }
        }
      );
    }
  }

  controller.signupAdm = async (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    console.log("SignUP adm email => ", email)
    console.log("SignUP adm password => ", password)
    
    let emailValido;

    if( req.body.email == undefined || email.length < 5){
      res.status(201).json( " =========== sem email =========== " )
    }else if(req.body.email == ""){
      res.status(201).json( " =========== sem senha =========== " )
    }else{
      await Users.find({email:email}).lean().exec(
        async function (e, docs) {
          emailValido = docs[0];
          if(!emailValido){
            var token = randtoken.generate(16);
            console.log("token", JSON.stringify(token))
            var user = new Users({ email: email, password: password, token:token, tpUser: '1' });
            user.save(function (err) {
              if (err) {
                console.log("Error! " + err.message);
                return err;
              }
              else {
                console.log(" ============================================== " )
                console.log(" emailValido ", user)
                console.log(" ============================================== " )
                res.status(200).json( user )
              }
            });
          }else{
            res.status(200).json( " =========== email já cadastrado =========== " );
          }
        }
      );
    }
  }
  
  return controller;
}