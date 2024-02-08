import React, { useEffect } from "react";
import img from "../assets/App-dev.svg";
import Heading from "../layout/Heading";
import Button from "../layout/Button";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS file

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10 animate-fade-in3">
      <Heading title1="Contact" title2="Us" />

      <div
        className="flex flex-col md:flex-row justify-between w-full  text-white"
        data-aos="fade-up" 
        data-aos-duration="2000"
      >
        <form className="w-full md:w-2/5 space-y-5 pt-20">
          <div className="flex flex-col text-white">
            <label htmlFor="userName">Your Name</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all border-r-4 border-b-4 border-r-green-800 border-b-green-800"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all border-r-4 border-b-4 border-r-green-800 border-b-green-800"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all border-r-4 border-b-4 border-r-green-800 border-b-green-800"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your number"
            />
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </form>

        <div className="w-full md:w-2/4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
