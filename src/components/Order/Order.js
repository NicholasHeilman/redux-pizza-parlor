import React, { Component } from 'react';
import axios from 'axios';


class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
            customerOrderDetail: [],
        }
    }
    
    moreDetails = () => {
            axios.get('/api/order'),
            axios.get('/api/pizza')
                .then(axios.spread((pizzaRespond, orderRespond)=> {
                    console.log('In GET Response', response);
                    this.setState({
                        customerOrders: pizzaRespond.data + orderRespond.data
                    })
                }).catch((error) => {
                    console.log('GET error', error);
                })
            )};;

    
    render()

        return(
        
            {JSON.stringify(customerOrderDetail)}
           
        )
    }
}