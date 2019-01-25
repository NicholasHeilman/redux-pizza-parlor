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
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';


class HomeListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            add: true,
            card: {maxWidth: 4,},
            media: {height: 40,
            paddingTop: '56.25%',},
            actions: {display: 'flex',},
            expand: {transform: 'rotate(0deg)',
                marginLeft: 'auto',},
        expandOpen: {
            transform: 'rotate(180deg)',},
            };
        };
    

        // displays remove button on pizza card 
        // once pizza is added to order.
    addOrRemove = () =>{
        if(this.state.add === true){
            return <Button onClick={this.handleAddClick} 
            variant="contained" color="primary">Add</Button>
        }
        else{
            return <Button onClick={this.handleRemoveClick} 
            variant="contained" color="primary">Remove</Button>
        }
    }

    // adds pizza to the order
    handleAddClick = () => {
        this.props.pizza.quantity = 1;
        const action = {type: 'SET_PIZZA', payload: this.props.pizza};
        this.props.dispatch(action);
        this.setState({
            add: false,
        })

    }

    // Removes pizza from the order.
    handleRemoveClick = () => {
        const action = {type: 'REMOVE_PIZZA', payload: this.props.pizza};
        this.props.dispatch(action);
        this.setState({
            add: true,
        })
    }

   
    

    render(){
        return(
            // each pizza in the array from HomeList is displayed
            //using the CardMedia in material ui.
            <div className="classes-card">
                <Card className={this.state.card}>
                <CardActionArea>
                    <CardHeader
                    title={this.props.pizza.name}/>
                    <CardMedia component="img"
                     className={this.state.media} 
                    image={this.props.pizza.image_path}/>
                    <CardContent>
                    {/* {JSON.stringify(this.props.pizza.image_path)} */}
                    {/* <p>{this.props.pizza.name}</p> */}
                    {/* <p>{this.props.pizza.price}</p> */}
                    {/* <img src={this.props.pizza.image_path} 
                    alt={this.props.pizza.description} /> */}
                    {this.addOrRemove()}
                    </CardContent>
                    <p>{this.props.pizza.price}</p>
                    </CardActionArea>
                </Card>
            </div>
        )
    }
}


const mapReduxStoreToProps = (reduxStore) => ( {reduxStore: reduxStore});
export default connect(mapReduxStoreToProps)(HomeListItem);