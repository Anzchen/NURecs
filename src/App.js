import { Button } from "@mui/material"
import { Footer } from './Components/Footer';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Restaurant from "./Restaurant";
import { useEffect} from "react";
import "./App.css";
function App() {

  useEffect(() => {
    document.title = "NURecs";  
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
