import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Manage from "./Manage";
import AddProduct from "./Add";
import Edit from "./Edit";


class Admin extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Manage Product</NavLink></li>
            <li><NavLink to="/addProduct">Add Product</NavLink></li>
            <li><NavLink to="/editProduct">Edit Product</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Manage}/>
            <Route path="/addProduct" component={AddProduct}/>
            <Route path="/editProduct" component={Edit}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Admin;