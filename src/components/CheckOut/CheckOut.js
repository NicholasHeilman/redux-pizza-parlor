import React, { Component } from 'react';
import './../App/App.css';
import { connect } from 'react-redux';
import CustomerInfo from './../CustomerInfo/CustomerInfo.js';


class CheckOut extends Component {

    setCheckout = () => {
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