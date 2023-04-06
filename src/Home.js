import { Header } from './Components/Header';
import React from "react";
import "./Home.css";
import boston from './images/boston.jpeg';
import Profile from "./Components/Profile";


const Home = () => {
  return (
    <div className='homePage'>
      <div className='homeImage'>
        <img
          src={boston}
          style={{ width: 1470, height: 350, objectFit: 'cover' }}
          alt="Image of Boston"
        />

        <div className='centered'> Find your favorites!📍 </div>
      </div>



      <Header />

    </div>
  );
};

export default Home;
