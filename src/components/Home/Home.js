import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';


class Home extends Component{

    componentDidMount(){
        this.refreshPizzaPage();
    }

    refreshPizzaPage = () => {

        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then((response) => {
            console.log('response in GET: ', response);
            const action = {
                type: 'SET_PIZZA',
                payload: response.data
            };
            this.props.dispatch(action);
        }).catch((error) => {
            alert('Error in GET: ', error)
        });
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

export default connect() (Home);