import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import WhyUs from "./Pages/WhyUs";
import Book from "./Pages/Book";
import DropSite from "./Pages/DropSite";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/why-us" element={<WhyUs />} />
        <Route exact path="/book" element={<Book />} />
        <Route exact path="/drop-site" element={<DropSite />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
