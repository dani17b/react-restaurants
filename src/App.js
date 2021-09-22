import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { RestaurantsList } from './modules/restaurantsList/RestaurantsList';
import { Login } from './modules/login/Login';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState(null);

  console.log("userInfo", userInfo);
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          {userInfo == null &&
            <Login setUserInfo={setUserInfo}/>
          }
          {userInfo != null &&
           <Redirect
            to={{
              pathname: '/home'
            }}
          />
          }
        </Route>
        <Route path="/home">
              <RestaurantsList userInfo={userInfo}/>
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
