import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";

import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import NewsPage from "./pages/NewsPage";
import ActivitiesPsage from "./pages/ActivitiesPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
// import NewsPage from "./pages/NewsPage";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/activities" element={<ActivitiesPsage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
      <Route path="/login" element={<AdminLoginPage/>}/>

      </Routes>

    </BrowserRouter>
   
  );
}

export default App;
