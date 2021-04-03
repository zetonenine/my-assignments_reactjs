import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import All from '../../Pages/AllPage'
import Blocked from '../../Pages/BlockedPage.js';
import Active from '../../Pages/ActivePage.js';
import './ApiFetcher.css'

function MyComponent() {

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
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className='loading_text'>Loading...</div>;
    } else {
        return (
        <Router>
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
        </Router>
        );
    }
}

export default MyComponent;