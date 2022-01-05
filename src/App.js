import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Rotas from './rotas';







function App() {
  return (
    <div className="App">
    
    <Router>
      <Rotas/>
    </Router>




    </div>
  );
}

export default App;
