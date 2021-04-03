import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import All from './components/Pages/AllPage.js';
import Blocked from './components/Pages/BlockedPage.js';
import Active from './components/Pages/ActivePage.js';
import './App.css';

function App() {

  return (
    <div className='App'>
      <div className='header'>
        <Header/>
      </div>
      <div>
        <Router>
        <Switch>
          <Route exact path='/' component={All}/>
          <Route exact path='/blocked' component={Blocked}/>
          <Route exact path='/active' component={Active}/>
        </Switch> 
      </Router> 
      </div>
      
    </div>
  );  
}

export default App;


