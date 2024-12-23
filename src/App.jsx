import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import "./App.css"; 
import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import NewsPage from "./pages/NewsPage";
import ActivitiesPsage from "./pages/ActivitiesPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { div } from "framer-motion/client";
// import NewsPage from "./pages/NewsPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>      <Header />          <HomePage/></div>}/>
        <Route path="/activities" element={<div>      <Header />          <ActivitiesPsage/></div>}/>
        <Route path="/news" element={<div>      <Header />          <NewsPage/></div>}/>
      <Route path="/login" element={<div className="divv"><AdminLoginPage/></div>}/>

      </Routes>

    </BrowserRouter>
   
  );
}

export default App;
