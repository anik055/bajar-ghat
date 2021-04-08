import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Manage from "./Manage";
import AddProduct from "./Add";
import Edit from "./Edit";
import './admin.css'


class Admin extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="head">
          <ul className="d-flex justify-content-center header text-white">
            <li className="btn btn-primary text-light m-2"><NavLink className="m-2 text-decoration-none text-light" exact to="/">Manage Product</NavLink></li>
            <li className="btn btn-danger m-2 text-decoration-none"><NavLink className="text-decoration-none m-2 text-light" to="/addProduct">Add Product</NavLink></li>
            <li className="btn btn-success m-2"><NavLink className="m-2 text-light text-decoration-none" to="/editProduct">Edit Product</NavLink></li>
          </ul>
          </div>
          <div className="content d-flex justify-content-center">
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