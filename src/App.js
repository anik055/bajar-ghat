import "./App.css";
import React, { createContext, useState } from "react";
// import fakeData from "../src/fakeData";
import Shop from "./components/Shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from "./components/Review/Review";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Login from "./components/Login/Login";
import Shipment from "./components/Shipment/Shipment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>login email: {loggedInUser.email}</h3>

      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop" >
            <Home></Home>
          </Route>
          <Route path="/review" >
            <Review></Review>
          </Route>
          <Route path="/login" >
            <Login></Login>
          </Route>
          <Route path="/admin" >
            <Admin></Admin>
          </Route>
          <Route path="/orders" >
            <Orders></Orders>
          </Route>
          {/* <Route path="/admin/stuff" >
            <Login></Login>
          </Route>
          <Route path="/admin/Contact" >
            <Login></Login>
          </Route> */}
          <PrivateRoute path="/shipment" >
            <Shipment></Shipment>
          </PrivateRoute>
          <PrivateRoute path="/inventory" >
            <Inventory></Inventory>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      {/* <Shop></Shop> */}
    </UserContext.Provider>
  );
}

export default App;
