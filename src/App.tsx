import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Collection from './pages/Collection';
import Home from './pages/Home';

function App() {
  return (
    <HashRouter basename='pronounce-app'>
      {/* <Route path='/pronounce-app' element={<Navigate to="/" />} /> */}
      <Route path='/' element={<Home />} />
      <Route path='/collection/:collectionName' element={<Collection />} />
    </HashRouter>
  );
}

export default App;
