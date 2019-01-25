import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import HomeListItem from './HomeListItem';


class HomeList extends Component{
    constructor(props){
        super(props)
        this.state = {
            pizzas: [],
        }
    }

    componentDidMount = () => {
        this.refreshPizza();
    }

    refreshPizza = () => {
    axios({
            method: 'GET',
            url: '/api/pizza'
        }).then((response) => {            
            this.setState({
                pizzas: [...response.data],
            })
        }).catch((error) => {
            alert('Error in GET: ', error)
        });
    }

    getPizzas = () => {
            const pizzasForDom = [];
        for (let i = 0; i < this.state.pizzas.length; i++) {
            let pizza = this.state.pizzas[i];
            let pizzaRow = <HomeListItem key={i} pizza={pizza}/>
            pizzasForDom.push(pizzaRow);
        }
        
        return pizzasForDom;

       
    }

    render(){
        return(
            <div>
                {JSON.stringify(this.pizzas)}
                <div className="getPizza">
                    {this.getPizzas()}
                </div>
            </div>
        )
    }
}

export default connect() (HomeList);