import React, { Component } from 'react';



import './App.css';
import Home from './../Home/Home'
import CustomerInfo from './../CustomerInfo/CustomerInfo'
import CheckOut from './../CheckOut/CheckOut'
import Admin from './../Admin/Admin'
import { HashRouter as Router, Route,} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Spicy Pizza Parlor</h1>
        </header>
        <Router>
          <div>

            <Route exact path="/" component={Home} />
            <Route exact path="/customer-info" component={CustomerInfo} />
            <Route exact path="/check-out" component={CheckOut} />
            <Route exact path="/admin" component={Admin} />

          </div>



        </Router>
        <br />
      </div>
    );
  }
}

export default App;
