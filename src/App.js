import React, { Component } from 'react';
import './App.css';
import Register from './components/Register1';
import LoginTab from './components/LoginForm';
import Home from './components/Home';
import Trial1 from './components/Trial1';
import Trial from './components/Trial';
import TableData from './components/Table';
import EnhancedTable from './components/TableSort'
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      /*<Router>
        <div className="App">
        <center><p style={{fontSize:30}}>Credit Karma</p></center>
        <Home/>
        <Route path="/LoginForm" component={LoginTab}/>
        <Route path="/Register1" component={Register}/>
        <Route path="/Table" component={TableData}/>
        </div>
      </Router>*/

    <div className="App">
      <EnhancedTable/>
      </div>
    );
  }
}

export default App;
