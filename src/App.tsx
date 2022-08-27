import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Collection from './pages/Collection';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      {/* <Route path='/pronounce-app' element={<Navigate to="/" />} /> */}
      <Route path='/pronounce-app' element={<Home />} />
      <Route path='/pronounce-app/collection/:collectionName' element={<Collection />} />
    </Routes>
  );
}

export default App;
