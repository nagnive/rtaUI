import React from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Routes from '../src/routes/routes';
import history from '../src/services/history';

function App() {
  return (
    <Router>
      <Routes history={history}>

      </Routes>
    </Router>
  );
}

export default App;
