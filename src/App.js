import { useState, useMemo } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash/Splash';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { TokenProvider } from './context/TokenContext';

function App() {

  return (
    <>
      <TokenProvider>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </TokenProvider>
    </>
  );
}

export default App;
