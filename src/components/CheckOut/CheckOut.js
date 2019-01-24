import React, { Component } from 'react';
import './../App/App.css';
import { connect } from 'react-redux';
// import CustomerInfo from './../CustomerInfo/CustomerInfo.js';
import axios from 'axios';


class CheckOut extends Component {


    postPizza = () => {
        const info =
        {
            customer_name: this.props.reduxStore.customerReducer.name,
            street_address: this.props.reduxStore.customerReducer.address,
            city: this.props.reduxStore.customerReducer.city,
            zip: this.props.reduxStore.customerReducer.zip,
            type: this.props.reduxStore.customerReducer.type,
            total: this.props.reduxStore.totalReducer.total,
            pizzas: this.props.reduxStore.pizzaReducer.pizzas
        }
        axios({
            method: 'POST',
            url: '/api/pizza',
            data: info
        }).then((response) => {
            console.log(response);

        }).catch((error) => {
            // console.log('error in GET, ', error);

            alert('Error in POST: ', error)
        });
    }

    setCheckout = () => {
        this.postPizza();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <h1>Step 3: Check Out</h1>
                <h3>{this.props.reduxStore.customerReducer.name}</h3>
                <h3>{this.props.reduxStore.customerReducer.address}</h3>
                <h3>{this.props.reduxStore.customerReducer.city}</h3>
                <h3>{this.props.reduxStore.customerReducer.zip}</h3>
                <h3>{this.props.reduxStore.customerReducer.type}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                <div>
                    <h3 id="order-total-checkout-pg">Total: {this.props.reduxStore.totalReducer}</h3>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div>
                    <button id="checkout-next" onClick={this.setCheckout}>Checkout</button>
                </div>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})

export default connect(mapReduxStoreToProps)(CheckOut);