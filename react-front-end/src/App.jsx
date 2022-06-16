import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Splash from './pages/Splash';
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<Splash />} />
         <Route path="/login" element={<Login />} />
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
