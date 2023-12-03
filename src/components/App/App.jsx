import React from 'react';
import Comments from '../Comments/Comments.jsx';
import Feelings from '../Feelings/Feelings.jsx';
import Home from '../Home/Home.jsx';
import Submit from '../Submit/Submit.jsx';
import Support from '../Support/Support.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/feelings'><Feelings /></Route>
        <Route exact path='/understanding'><Understanding /></Route>
        <Route exact path='/support'><Support /></Route>
        <Route exact path='/comments'><Comments /></Route>
        <Route exact path='/submit'><Submit /></Route>

      </Router>



    </div>
  );
}

export default App;
