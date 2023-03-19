import React, {} from 'react';
import "./App.css";
import { Footer } from './Components/Footer';
import { Routes, Route } from "react-router-dom";
import Home from "./Navigation/Home";
import Restaurant from "./Navigation/Restaurant";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <div class="topnav" id="myTopnav">
        <t>NURecs</t>
        <a href="/restaurant">Restaurants</a>
        <a href="/home">Home</a>
      </div>
      {/* <img style={{ width: 1500, height: 300 }} src={logo} alt="NURecs logo" /> */}

      {/* <h1 style={{ float: 'start' }} id="recbanner">NU RECS</h1> */}
      
      <Profile />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
