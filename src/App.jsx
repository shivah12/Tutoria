import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

return (
    <div>
      <Navbar />

      <main>
        <div className='bg-black'>
        <div id='home'>
          <Home />
          </div>
          <div id='about'>
            <About/>
          </div>
          <div id='courses'>
            <Courses/>
          </div>
          <div id='reviews'>
            <Reviews/>
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App