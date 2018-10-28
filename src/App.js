import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Table from './components/table';
import './App.css';
import MyForm from './components/form';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>
              KNIT AlUMNUS DATABASE
            </h1>
          </header>
          <br />
          <Link to="/" >Home</Link>
          <Link to="/newEntry" >  New Entry </Link>

          <br />
          <Route exact path="/" component={Table} />
          <Route exact path="/newEntry" component={MyForm} />
        </div>
      </Router>
    );
  }
}
export default App;
