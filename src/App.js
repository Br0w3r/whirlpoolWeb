import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleHeader from './components/header/header';
import SingleNavBar from './components/navBar/navBar';
import Home from './pages/home/home';
import Services from './pages/services/services';
import Contact from './pages/contact/contact';

function App() {
  return (
    <BrowserRouter>
      <SingleHeader />
      <SingleNavBar />
      <Routes>
        <Route path='/home' Component={Home} />
      </Routes>
      <Routes>
        <Route path='/services' Component={Services} />
      </Routes>
      <Routes>
        <Route path='/contact' Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
