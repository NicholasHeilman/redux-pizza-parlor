import React, { Component } from 'react';
import { connect } from 'react-redux'
import HomeList from './HomeList';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './HomeListItem.css';
import '../App/App.css';

class Home extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            button: {margin: 0},
            input: {display: 'none',},
        }   
    }

    nextPage = () => {
        this.props.history.push('/customer-info')
        
    }
    
    render(){
        return(
            <div>
                <h1>Home</h1>
                <HomeList />
                <div>
                <footer className="home-container">
                    <Button  onClick={this.nextPage} 
                        variant="contained" color="primary"
                        className={this.state.button}>Next</Button>
                {/* <button onClick={this.nextPage}>Next</button> */}
                </footer>
                </div>
            </div>
        )
    }
}

export default connect() (Home);