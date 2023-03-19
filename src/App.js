
import { Footer } from './Components/Footer';
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Restaurant from "./Restaurant";
import logo from './images/image.jpeg';
import "./App.css";
import { createClient } from '@supabase/supabase-js'
import portrait from '../src/img/husky.png';
import user from '../src/img/user.png';
import edit from '../src/img/edit.png';
import inbox from '../src/img/envelope.png';
import settings from '../src/img/settings.png';
import help from '../src/img/question.png';
import logout from '../src/img/log-out.png';
import React, { useState, useEffect, useRef } from 'react';

const supabaseUrl = 'https://hnnuqgisixebdyvrctmz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubnVxZ2lzaXhlYmR5dnJjdG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyNDIyMzAsImV4cCI6MTk5MzgxODIzMH0.11o7CFRgQbEOXewt_R4QI0JIXLi1FV14whhlyxJs6G8'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getRestaurants() {
  return await supabase.from('restaurants').select()
  // console.log(restaurants)
}

function App() {

  // this is for clicking dropdowns
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.title = "NURecs";
    getRestaurants().then( data =>  {
      console.log(data.data)
    });

    // async function fetchRestaurants() {
    //   sortRestaurants(await getAllRestaurants());
    // }
    // fetchRestaurants();

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  }, []);

  return (
    <div className="App">
      <div class="topnav" id="myTopnav">
        <t>NURecs</t>
        <a href="/restaurant">Restaurants</a>
        <a href="/">Home</a>
      </div>
      {/* <img style={{ width: 1500, height: 300 }} src={logo} alt="NURecs logo" /> */}

      {/* <h1 style={{ float: 'start' }} id="recbanner">NU RECS</h1> */}

      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={portrait} alt="husky profile"></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <h3>Adrian Tam<br /><span>Freshman Year</span></h3>
          <ul>
            <DropdownItem img={user} text={"My Profile"} />
            <DropdownItem img={edit} text={"Edit Profile"} />
            <DropdownItem img={inbox} text={"Inbox"} />
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Help"} />
            <DropdownItem img={logout} text={"Logout"} />
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default App;
