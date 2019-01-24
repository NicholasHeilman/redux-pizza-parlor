import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class HomeListItem extends Component{
    

   
    

    render(){
        return(
            <div>
                <li><p>{this.props.pizza.name}</p></li>
                <li><p>{this.props.pizza.price}</p></li>
                <button>Add</button>
            </div>
        )
    }
}
// const mapReduxStoreToProps = (reduxStore) => ( {reduxStore: reduxStore});
export default connect() (HomeListItem);