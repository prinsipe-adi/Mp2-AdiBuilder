
//imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './App.css'
import NavBar from './components/NavBar';
import HeroImage from './components/HeroImage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



function App() {
  return (
    <>
    <NavBar />
    <HeroImage />
    <AboutUs />
    <Services />
    <Portfolio /> 
    <Contact />
    </>
  )
}

export default App
