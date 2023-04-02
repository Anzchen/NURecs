import { Header } from './Components/Header';
import React from "react";
import "./Home.css";
import boston from './images/boston.jpeg';
import Profile from "./Components/Profile";


const Home = () => {
  return (
    <div>
      <div className='homeimage'>
        <img
          src={boston}
          style={{ width: 1500, height: 350, objectFit: 'cover' }}
          alt="Image of Boston"
        />

        <div className='centered'> Find your favorites!📍 </div>
      </div>


      <Header />
      <p>This is the Home page of the application</p>

    </div>
  );
};

export default Home;
