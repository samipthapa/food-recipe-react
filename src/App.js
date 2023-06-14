import { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { TokenProvider } from './context/TokenContext';
import { lazy } from 'react';
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import Splash from './pages/Splash/Splash';

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Splash = lazy(() => import('./pages/Splash/Splash'));



function App() {

  return (
    <>
      <TokenProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </TokenProvider>
    </>
  );
}

export default App;
