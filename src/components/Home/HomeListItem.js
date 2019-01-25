import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeListItem.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

// import axios from 'axios';


class HomeListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            add: true,
            card: {maxWidth: 400,},
            media: {height: 0,
            paddingTop: '56.25%',},
            actions: {display: 'flex',},
            expand: {transform: 'rotate(0deg)',
                marginLeft: 'auto',},
        expandOpen: {
            transform: 'rotate(180deg)',},
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
            <div className="classes-card">
                <Card className={this.state.card}>
                    <CardHeader
                    title={this.props.pizza.name}/>
                    <CardMedia className={this.state.media} 
                    image={this.props.pizza.image_path}/>
                    <CardContent>
                    {/* {JSON.stringify(this.props.pizza.image_path)} */}
                    {/* <p>{this.props.pizza.name}</p> */}
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