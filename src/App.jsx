import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./Navbar"
import HeroSlider from "./HeroSlider"
import AboutUs from "./AboutUs"
import Services from "./Services"
import Resources from "./Resources"
import Innerpeace from "./Innerpeace"

function Home() {
  return (
    <>
      <HeroSlider />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* Only top padding for navbar offset */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/inner-peace" element={<Innerpeace />} />
        </Routes>
      </div>
    </Router>
  )
}
