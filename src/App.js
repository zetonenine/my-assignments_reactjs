import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import All from './components/Pages/AllPage'
import Blocked from './components/Pages/BlockedPage.js';
import Active from './components/Pages/ActivePage.js';
import './App.css';
 
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://watchlater.cloud.technokratos.com/get/array")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setUsers(result);
        },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  return (
    <div className='App'>

      <Router>     
        <div className='header'>
          <Header/>
        </div>

        <div>
          {
            error &&
              <div>Error: {error.message}</div>
          }
          {
            !isLoaded && 
              <div className='loading_text'>Loading...</div>
          }
          {!error && isLoaded &&
              <Switch>
                <Route exact path='/'>
                    <All users={users}/>
                </Route>
                <Route exact path='/active'>
                    <Active users={users}/>
                </Route>
                <Route exact path='/blocked'>
                    <Blocked users={users}/>
                </Route>
              </Switch>
          }
        </div>
      </Router>
    </div>
  ); 
}
 
export default App;