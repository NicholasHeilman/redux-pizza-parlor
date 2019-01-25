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
  // runs durning page load
 componentDidMount(){
     this.getAdmin();
 };
    //GET order info from database
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
    };//end GET
    

    render() {
            // Map the data for display  
        let customerOrderList = this.state.customerOrders.map(order =>{
            console.log(order);
            return(
                
                    <tr key={order.id}>
                        <td>{order.customer_name}</td>
                        <td>{order.type}</td>
                        <td>{order.time}</td>
                         {/* the Data that does not need to display */}
                        {/* <td>{order.street_address}</td> */}
                        {/* <td>{order.city}</td> */}
                        {/* <td>{order.zip}</td> */}
                        <td>{order.total}</td>
                    </tr>
                
            )
        })// end map


        //Display on DOM   http://localhost:3000/#/Admin
        return (
            <div className="container">
            <table className="adminTable">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Time</th>
                    <th>Total</th>
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