import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Vehicles from './components/Vehicles';
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/login" element={<Login />} />
         <Route path="/vehicles" element={<Vehicles />} />
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
