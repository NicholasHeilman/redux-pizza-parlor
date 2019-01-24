import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeListItem.css'
import PropTypes from 'prop-types';
import {
    withStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import axios from 'axios';


class HomeListItem extends Component{
    

   
    

    render(){
        return(
            <div className="container">
                <Card>
                <CardContent>
                <p>{this.props.pizza.name}</p>
                <p>{this.props.pizza.price}</p>
                <button>Add</button>
                </CardContent>
                </Card>
            </div>
        )
    }
}
// const mapReduxStoreToProps = (reduxStore) => ( {reduxStore: reduxStore});
export default connect() (HomeListItem);