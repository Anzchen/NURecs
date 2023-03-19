import { Button } from "@mui/material"
import { Footer } from './Components/Footer';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Restaurant from "./Restaurant";
import { useEffect} from "react";
import "./App.css";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hnnuqgisixebdyvrctmz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhubnVxZ2lzaXhlYmR5dnJjdG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyNDIyMzAsImV4cCI6MTk5MzgxODIzMH0.11o7CFRgQbEOXewt_R4QI0JIXLi1FV14whhlyxJs6G8'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getRestaurants() {
  return await supabase.from('restaurants').select()
  // console.log(restaurants)
}

function App() {
  
  useEffect(() => {
    document.title = "NURecs";  
    getRestaurants().then( data =>  {
      console.log(data.data)
    });
  }, []);

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };  

  return (
    <div className="App">
      <h1 style={{float: 'start'}}>NURecs</h1>
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
export default App;
