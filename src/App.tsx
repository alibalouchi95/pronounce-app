import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Collection from './pages/Collection';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collection/:collectionName' element={<Collection />} />
    </Routes>
  );
}

export default App;
