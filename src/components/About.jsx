import React, { useEffect } from "react";
import img from "../assets/her.svg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "../layout/animations.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14 text-white animate-fade-in2">
      <div className="w-full md:w-2/4" data-aos="fade-right"> 
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2" data-aos="fade-left"> 
        <Heading title1="About" title2="Us?" />
        <p className="text-lightText">
          About the tutorial, explore our courses etc. Here is a brief about us. You can also use this section to describe your project and what it
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
