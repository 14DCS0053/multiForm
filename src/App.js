import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './Component/Form';
import Result from './Component/Result'


class App extends Component {


  render() {

    return (

      <Router>
        <Route path="/" component={Form} exact>
          <Route path="/Result" component={Result} />
        </Route>
      </Router>

    )
  }
}

export default App;
