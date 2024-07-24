import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Home from './Pages/Home/Home';
import HomeMobile from './Pages/Home/HomeMobile';
import './App.css';

function App() {
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLaptop ? <Home /> : <HomeMobile />}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
