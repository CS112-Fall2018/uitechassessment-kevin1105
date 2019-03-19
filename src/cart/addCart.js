import React, { Component } from 'react';
import axios from 'axios';
import Cart from './cartlist'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

export default class addCart extends React.Component {

    state = {
        name: '',
        description: '',
        price: '',
        amount: '',
    }

    handleSubmit = (event) =>  {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.description);
        console.log(this.state.price);
        console.log(this.state.amount);

        axios.post('http://localhost:5555/item/add', {
            name: this.state.name,
            description: this.state.description,
            price: parseInt(this.state.price),
            amount: parseInt(this.state.amount)
        })
        .then(res => {
            console.log(res)
        }) 
    }

    handleName = (event) =>  {
        this.setState({ name: event.target.value });
    }
    handleDescription = (event) => {
        this.setState({ description: event.target.value });
    }
    handlePrice = (event) => {
        this.setState( { price: parseInt(event.target.value) } );
    }
    handleAmount = (event) => {
        this.setState({ amount: parseInt(event.target.value) });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" onChange={this.handleName} />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" onChange={this.handleDescription} />
                </label>
                <br />
                <label>
                    Price:
                    <input type="text" onChange={this.handlePrice} />
                </label>
                <br />
                <label>
                    Amount:
                    <input type="text" onChange={this.handleAmount} />
                </label>

                <br />
                <button > Add Cart </button>
            </form>
        )
    }
}



