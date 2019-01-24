import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import HomeList from './HomeList';


class Home extends Component{

    // componentDidMount(){
    //     this.refreshPizzaPage();
    // }

    

    render(){
        return(
            <div>
                <h1>Home</h1>
                <HomeList />
            </div>
        )
    }
}

export default connect() (Home);