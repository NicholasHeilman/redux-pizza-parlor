import React, { Component } from 'react';

class CustomerInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            streetAddress: '',
            
        }
    }
render(){
    return(
        <div>
            <h1>Customer Info</h1>
        </div>
    )
}
}

export default CustomerInfo;