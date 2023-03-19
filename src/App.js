import { Button } from "@mui/material"
import { Footer } from './Components/Footer';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Restaurant from "./Restaurant";
import "./App.css";
import portrait from '../src/img/husky.png';
import user from '../src/img/user.png';
import edit from '../src/img/edit.png';
import inbox from '../src/img/envelope.png';
import settings from '../src/img/settings.png';
import help from '../src/img/question.png';
import logout from '../src/img/log-out.png';
import React, { useState, useEffect, useRef } from 'react';



function App() {

  useEffect(() => {
    document.title = "NURecs";
  }, []);

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };

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

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <div className="App">
      <h1 style={{ float: 'start' }} id="recbanner">NU RECS</h1>

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

      <ul>
        <Link to="/" style={linkStyle}>
          <Button variant='contained'>Home</Button>
        </Link>
        <Link to="/Restaurant" style={linkStyle}>
          <Button variant='contained'>Restaurants</Button>
        </Link>
      </ul>
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
