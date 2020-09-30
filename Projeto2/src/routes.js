import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import LojaPokemon2 from './lojapokemon2';
import Login from './login/login';
import SignUp from './login/signup';

const PagesRoot = () => (
  <Router>
    
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path="/login" component={Login} />
        <Route path="/lojapokemon" component={LojaPokemon2} />
        <Route path='/signup' component={SignUp}/>
      </Switch>
   
  </Router>
)


export default PagesRoot;