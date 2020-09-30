// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link, 
//   Redirect
// } from "react-router-dom";
// import LojaPokemon2 from './lojapokemon2';
// import Login from './login/login';

// export default function Routes() {
//   return (
//     <Router>
//       <div style={{marginTop: 75}}>
//         <nav>
//           <ul>
//           <li>
//               <Link to="/login">Logar</Link> 
//             </li>
//             <li>
//               <Link to="/lojapokemon1">Loja Pokemon 1</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//         <Redirect exact from='/' to='/login' />
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/lojapokemon1">
//             <LojaPokemon2/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

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