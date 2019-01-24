import React, { Component } from 'react';
import './../App/App.css';


class CheckOut extends Component {

    setCheckout = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div class="container">
                <h1>Step 3: Check Out</h1>
                <table>
                    <tbody>
                        <thead>
                            <th>Name</th>
                            <th>Cost</th>
                        </thead>
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

export default CheckOut;