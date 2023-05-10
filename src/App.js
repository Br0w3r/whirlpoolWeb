import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleHeader from './components/header/header';
import SingleNavBar from './components/navBar/navBar';
import Home from './pages/home/home';


function App() {
  return (
    <BrowserRouter>
      <SingleHeader />
      <SingleNavBar />
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
