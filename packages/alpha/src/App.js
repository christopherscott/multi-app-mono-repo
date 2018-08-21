import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const SettingsPage = () => (
  <div>
    <header className="App-header">
      <h1 className="App-title">Settings Page</h1>
    </header>
    <p className="App-intro">
      TODO: add settings here
    </p>
    <div>
      <Link to="/alpha">Index Page</Link>
    </div>
  </div>
);

const IndexPage = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Alpha App!!!! -----</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <div>
      <Link to="/alpha/settings">Settings Page</Link>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/alpha" component={IndexPage} />
            <Route path="/alpha/settings" component={SettingsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
