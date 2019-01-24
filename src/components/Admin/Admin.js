import React, { Component } from 'react';
import axios from 'axios';
import './../App/App.css';

class Admins extends Component {
    constructor(props){
        super(props);
        this.state = {
          customerOrders: [],  
        }
    }

 componentDidMount(){
     this.getAdmin();
 };

    getAdmin = () => {
        axios.get('/api/order')
        .then(response => {
            console.log('In GET Response',response);
            this.setState({
                customerOrders: response.data
            })
            }).catch((error) =>{
                console.log('GET error', error);
            })
    };
    

    render() {

        let customerOrderList = this.state.customerOrders.map(order =>{
            console.log(order);
            return(
                
                    <tr key={order.id}>
                        <td>{order.customer_name}</td>
                        <td>{order.total}</td>
                        <td>{order.type}</td>
                        <td>{order.time}</td>
                    </tr>
                
            )
        })
        
        return (
            <div className="container">
            <table className="adminTable">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Total</th>
                    <th>Type</th>
                    <th>Time</th>
                </tr>
                </thead>
            <tbody>
                {customerOrderList}
            </tbody>
            </table>
            </div>
        )
    }
}

export default Admins;