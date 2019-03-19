
import React, { Component } from 'react';
import axios from 'axios';
import Addcart from './addCart';

export default class cartlist extends Component {

   state = {
       cart: []
   }

   componentDidMount() {
       axios.get('http://localhost:5555/list')
           .then(res => {
               console.log(res);
               this.setState({cart: res.data});
           });
   }

   render() {
       return (
           <div>
              
               <ul>
                   {this.state.cart.map(item =>
                   <li key={item.id}>{item.name}{': '}{item.description}{': '}{item.price}{': '}{item.amount}</li>)}
               </ul>
              
              
           </div>
       )
   }

}

