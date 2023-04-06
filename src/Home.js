import { Header } from './Components/Header';
import React from "react";
import "./Home.css";
import boston from './images/boston.jpeg';
import Profile from "./Components/Profile";


const Home = () => {
  return (
    <div className='homePage'>
        <img className='homeImage'
          src={boston}
          alt="Boston"
        />
      <div className='centered'> Find your favorites!📍 </div>

      <Header />

    </div>
  );
};

export default Home;
