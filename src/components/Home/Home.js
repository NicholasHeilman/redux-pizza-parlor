import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import HomeList from './HomeList';
import './HomeListItem.css';


class Home extends Component{

<<<<<<< HEAD
    // componentDidMount(){
    //     this.refreshPizzaPage();
    // }

    nextPage = () => {
        console.log('button clcked');
        this.props.history.push('/customer-info')
        
    }
=======
    
>>>>>>> feature-cards

    render(){
        return(
            <div>
                <h1>Home</h1>
                <HomeList />
                <div className="home-container">
                <button onClick={this.nextPage}>Next</button>
                </div>
            </div>
        )
    }
}

export default connect() (Home);