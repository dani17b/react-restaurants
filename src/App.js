import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { RestaurantsList } from './modules/restaurantsList/RestaurantsList';
import { Login } from './modules/login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Login />
        </Route>
        <Route path="/home">
          <RestaurantsList />
        </Route>
        <Route path="/manage">
          <div>Pantalla de gestion de pedidos de un restaurante</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
