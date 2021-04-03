import React from 'react';
import Header from './components/Header/Header';
import MyComponent from './components/ContentBlock/Api/ApiFetcher'
import './App.css';

function App() {

  return (
    <div className='App'>
      <div className='header'>
        <Header/>
      </div>
      <MyComponent/>
    </div>
  );  
}

export default App;


