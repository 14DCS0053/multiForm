import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Navigation from './Component/Navigation';
import Footer from './Component/Footer';
import allRoute from './Component/allRoute';


class App extends Component {


  render() {
    return (

      <div>

        <BrowserRouter>
          <Navigation />
          <Switch>
            {allRoute.map(r => <Route path={r.path} component={r.component} />)}
          </Switch>
          <Footer />
        </BrowserRouter>

      </div>

    )
  }
}

export default App;
