import React from 'react';
import styles from './styles/App.module.scss';
import Intro from './pages/Intro';
import { Routes, Route } from 'react-router-dom';
import Actions from './pages/Actions';

function App() {
  return (    
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/actions" element={<Actions />} />
    </Routes>
  );
}

export default App;
