import React, { Component } from 'react';

class CustomerInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            zip: '',
            type: 'Pickup',
        }

    }


    //////////////////////////////////////Handle state changes from inputs
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value,
        });
    }
    handleCityChange = (event) => {
        this.setState({
            city: event.target.value,
        });
    }
    handleZipChange = (event) => {
        this.setState({
            zip: event.target.value,
        });
    }
    handleDeliveryClick = () => {
        this.setState({
            type: 'Delivery',
        });
    }
    handlePickUpClick = () => {
        this.setState({
            type: 'Pickup',
        });
    }
    ///////////////////////////////////////End state change handlers

    setCustomer = (event) => {
        event.preventDefault();

        this.props.history.push('/check-out');
    }

render(){
    return(
        <div>
            <h1>Step 2: Customer Info</h1>
            <br />
            <input onChange={this.handleNameChange} type="text" placeholder="Name" />
            <br />
            <input onChange={this.handleAddressChange} type="text" placeholder="Street Address" />
            <br />
            <input onChange={this.handleCityChange} type="text" placeholder="City name" />
            <br />
            <input onChange={this.handleZipChange} type="text" placeholder="Zip Code" />
            <br />

            <button onClick={this.handleDeliveryClick}>Delivery</button>
            <button onClick={this.handlePickUpClick}>Pick Up</button>
            <p>Order for: {this.state.type}</p>


            <button onClick={this.setCustomer}>Next</button>
        </div>
    )
}
}

export default CustomerInfo;