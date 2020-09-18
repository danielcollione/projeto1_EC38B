import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from "react-router-dom";
import LojaPokemon from './lojapokemon';
import LojaPokemon2 from './lojapokemon2';

export default function Routes() {
  return (
    <Router>
      <div style={{marginTop: 75}}>
        <nav>
          <ul>
            <li>
              <Link to="/lojapokemon1">Loja Pokemon 1</Link> 
            </li>
            <li>
              <Link to="/lojapokemon2">Loja Pokemon 2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Redirect exact from='/' to='/lojapokemon1' />
          <Route path="/lojapokemon1">
            <LojaPokemon />
          </Route>
          <Route path="/lojapokemon2">
            <LojaPokemon2/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}