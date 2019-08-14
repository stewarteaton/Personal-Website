import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import Page from './pages/page';
import Projects from './pages/projects';
import About from './pages/oldAbout';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Page}/>
              <Route exact path='/Projects' component={Projects} />
              <Route exact path='/About' component={About} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
