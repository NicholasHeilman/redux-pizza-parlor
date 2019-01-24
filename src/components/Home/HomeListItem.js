import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';


class HomeListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            add: true,
        };
    }
    
    addOrRemove = () => {
        if(this.state.add === true){
            return <button onClick={this.handleAddClick}>Add</button>
        }
        else{
            return <button onClick={this.handleRemoveClick}>Remove</button>
        }
    }

    handleAddClick = () => {
        console.log(this.props.pizza);
        const action = {type: 'SET_PIZZA', payload: this.props.pizza};
        this.props.dispatch(action);
        this.setState({
            add: false,
        })

    }

    handleRemoveClick = () => {
        console.log(this.props.pizza);
        const action = {type: 'REMOVE_PIZZA', payload: this.props.pizza};
        this.props.dispatch(action);
        this.setState({
            add: true,
        })
    }
   
    

    render(){
        return(
            <div>
                <li><p>{this.props.pizza.name}</p></li>
                <li><p>{this.props.pizza.price}</p></li>
                {this.addOrRemove()}
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ( {reduxStore: reduxStore});
export default connect(mapReduxStoreToProps)(HomeListItem);