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

    // refreshes the DOM
    componentDidMount = () => {
        this.refreshPizza();
    }


    // axios GET to get the pizzas from the database to display
    refreshPizza = () => {
    axios({
            method: 'GET',
            url: '/api/pizza'
        }).then((response) => {
            console.log('response is ', response.data);
            
            this.setState({
                pizzas: [...response.data],
            })
            console.log(this.state);
            
        }).catch((error) => {
            // console.log('error in GET, ', error);
            
            alert('Error in GET: ', error)
        });
    }

    
    // Loops through the pizzas array from the axios GET
    // and pushes each pizza into a new array to display on DOM
    getPizzas = () => {
            const pizzasForDom = [];
        for (let i = 0; i < this.state.pizzas.length; i++) {
            let pizza = this.state.pizzas[i];
            let pizzaRow = <HomeListItem key={i} pizza={pizza}/>
            pizzasForDom.push(pizzaRow);
            console.log('pizzaRow ', pizzaRow);
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
// const mapReduxStoreToProps = (reduxStore) => ( {reduxStore: reduxStore});
export default connect() (HomeList);