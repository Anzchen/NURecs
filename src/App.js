import React, { } from 'react';
import "./App.css";
import { Footer } from './Components/Footer';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Restaurant from "./Restaurant";
import "./index.css";
import { createClient } from '@supabase/supabase-js'
import Profile from "./Components/Profile";
import { useState, useEffect, useRef } from 'react';

const supabaseUrl = 'https://hnnuqgisixebdyvrctmz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubnVxZ2lzaXhlYmR5dnJjdG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyNDIyMzAsImV4cCI6MTk5MzgxODIzMH0.11o7CFRgQbEOXewt_R4QI0JIXLi1FV14whhlyxJs6G8'
const supabase = createClient(supabaseUrl, supabaseKey)

function App() {

  // this is for clicking dropdowns
  const [restaurantData, setRestaurantData] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  let menuRef = useRef();

  useEffect(() => {

    document.title = "NURecs";
    getRestaurants();
    // getRestaurants().then( data =>  {
    //   console.log(data.data)
    // });

    // async function fetchRestaurants() {
    //   sortRestaurants(await getAllRestaurants());
    // }
    // fetchRestaurants();
  }, []);

  async function getRestaurants() {
    const { data } = await supabase.from('restaurants').select();
    setRestaurantData(data);
  }

  return (
    // the banner
    <div className="App">
      <div className="topnav" id="myTopnav">
        <t>NURecs</t>
        <a href="/restaurant">Restaurants</a>
        <a href="/">Home</a>
      </div>


      {/* <h1 style={{ float: 'start' }} id="recbanner">NU RECS</h1> */}

      <Profile />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurant" element={<Restaurant data={restaurantData} />}></Route>
      </Routes>


      <Footer />
      
    </div>
  );
}

export default App;
