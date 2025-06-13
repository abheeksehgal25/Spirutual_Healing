import Navbar from './Navbar';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Resources from './components/Resources';
import Innerpeace from './components/Innerpeace';
import Events from './components/Events';
import HappyClients from './components/HappyClients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSlider />
      <AboutUs />
      <Services />
      <HappyClients />
      <Resources />
      <Events />
      <Innerpeace />
      <Footer />
    </div>
  );
}

export default App;
