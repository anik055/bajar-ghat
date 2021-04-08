import "./App.css";
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import CheckOut from "./components/CheckOut/CheckOut";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <Route path="/admin" >
            <Admin></Admin>
          </Route>
          <Route path="/orders" >
            <Orders></Orders>
          </Route>
          <PrivateRoute path="/checkOut" >
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/login" >
            <Login></Login>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
