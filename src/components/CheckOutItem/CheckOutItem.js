import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckoutItem extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.pizza.name}</td>
                <td>{this.props.pizza.price}</td>
            </tr>
        )
    }
}

export default connect()(CheckoutItem);