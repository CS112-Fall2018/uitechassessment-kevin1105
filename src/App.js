import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './cart/cartlist'
import AddCart from './cart/addCart';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Link to="/">Home</Link>
          <Route path="/" />
          <br/>
          <Link to="/cart">Cart List</Link>
          <Route path="/cart" component={handCart} />
          <br/>
          <Link to="/addcart">Add Cart</Link>
          <Route path="/addcart" component={handleAdd} />
      </div> 
      </Router>
    )
  }
}

function handleAdd() {
  return (
    <div>
      <AddCart />
    </div>
  )
}

function handCart() {
  return (
    <div>
      <Cart />
    </div>
  )
}



export default App;
