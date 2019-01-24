import React, { Component } from 'react';
import axios from 'axios';

class Admins extends Component {
    constructor(props){
        super(props);
        this.state = {
          customerOrders: []  
        }
    }

 componentDidMount(){
     getAdmin();
 }
    getAdmin = () => {
        axios.get('/api/order')
        .then(response => {
            console.log('In GET Response',response);
            const action = {type: 'CUSTOMER_INFO', payload: response.data };
            this.props.dispatch(action);
            }).catch((error) =>{
                console.log('GET error', error);
            })
        };
    

    render() {
        return (
            <div>
                <h1>Admins</h1>
            </div>
        )
    }
}

export default Admins;