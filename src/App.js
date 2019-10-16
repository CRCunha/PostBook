import React from 'react';
import './index.css';

import NavBar from './components/NavBar'
import Routes from './components/Routes/routes'

function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
