import React, { Component } from 'react';
import { connect } from 'react-redux'
import HomeList from './HomeList';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './HomeListItem.css';


class Home extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            button: {margin: 0},
            input: {display: 'none',},
        }   
    }

    // componentDidMount(){
    //     this.refreshPizzaPage();
    // }

    nextPage = () => {
        console.log('button clcked');
        this.props.history.push('/customer-info')
        
    }
    
    /* <Button onClick={this.handleAddClick} 
                    variant="contained" color = "primary"
                    className={this.state.button}>Next</Button> */

    render(){
        return(
            <div>
                <h1>Home</h1>
                <HomeList />
                <div className="home-container">
                    <Button onClick={this.nextPage} 
                        variant="contained" color="primary"
                        className={this.state.button}>Next</Button>
                {/* <button onClick={this.nextPage}>Next</button> */}
                </div>
            </div>
        )
    }
}

export default connect() (Home);