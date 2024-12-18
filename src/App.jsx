import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from './layouts/Header'
import HomePage from './pages/HomePage'
import { AdminLoginPage } from "./pages/AdminLoginPage";


function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <HomePage /> */}
      <AdminLoginPage/>
    </BrowserRouter>
   
  );
}

export default App;
