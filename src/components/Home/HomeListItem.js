import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeListItem.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import axios from 'axios';


class HomeListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            add: true,
            card: {
                minWidth: 250,},
            title: {fontSize: 14,},
            pos: {marginBottom: 12,},
        };
        };
    
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
            <div className="container">
                <Card className={this.state.card}>
                    <CardContent>
                    <p>{this.props.pizza.name}</p>
                    <p>{this.props.pizza.price}</p>
                    {this.addOrRemove()}
                    </CardContent>
                </Card>
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ( {reduxStore: reduxStore});
export default connect(mapReduxStoreToProps)(HomeListItem);