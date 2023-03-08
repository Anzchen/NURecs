
import { Footer } from './Components/Footer';
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Restaurant from "./Restaurant";
import { useEffect} from "react";
import logo from './images/image.jpeg';
import "./App.css";
function App() {

  useEffect(() => {
    document.title = "NURecs";  
  }, []);

  return (
    <div className="App">
      <div class="topnav" id="myTopnav">
        <t>NURecs</t>
        <a href="/restaurant">Restaurants</a>
        <a href="/">Home</a>
      </div>
      <img style={{ width: 1500, height: 300 }} src={logo} alt="NURecs logo" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
