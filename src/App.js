import "./App.css";
import { Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Home from "./views/Home";
import About from "./views/About";
import Products from "./views/Product";
import Services from "./views/Services";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="App">
        <Logo />
        <Nav home='Home' about='About' products='Products' services='Services'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </div>
  )
}


export default App;
