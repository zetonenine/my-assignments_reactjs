import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import All from './components/Header/Pages/AllPage.js';
import Blocked from './components/Header/Pages/BlockedPage.js';
import Active from './components/Header/Pages/ActivePage.js';

function App() {

  return (
    <div className='App'>
      <Header/>
      <Router>
        <Switch>
          <Route exact path='/' component={All}/>
          <Route exact path='/blocked' component={Blocked}/>
          <Route exact path='/active' component={Active}/>
        </Switch> 
      </Router> 
    </div>
    
    
  );      
}

export default App;


