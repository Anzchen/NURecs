import { Header } from './Components/Header';
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

  return (
    <div className="App">
      <h1 style={{float: 'start'}}>NURecs</h1>
      <Header />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Restaurant">Restaurant</Link>
        </li>
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
