import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NavBar from './components/incs/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/incs/Footer";
function App() {
  return (
    <Router>
      <div>
      
        <NavBar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}>
          </Route>

          <Route path = "/about" element={<About/>}>
          </Route>

          <Route path = "/contact" element={<Contact/>}>
          </Route>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
