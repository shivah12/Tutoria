import React from "react";
import img from "../assets/about.svg";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className="md:w-2/4 text-center bg-black border- p-8 rounded-lg shadow-md">
        <h2 className="text-6xl font-semibold leading-tight">
          <span className="text-green-500"> Welcome to Tutoria</span>
        </h2>
        <p className="text-xl text-lightText mt-5 text-start">
          Tutoria is your gateway to a world of limitless learning possibilities.
          With our cutting-edge eLearning platform, you can explore a vast
          library of courses, from academic subjects to practical skills, all
          designed to help you achieve your goals.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={1000}>
          <Button title="Contact Us" />
        </Link>
      </div>

      <div className="w-full md:w-2/5">
        <img src={img} alt="img" className="rounded-lg shadow-md-green" />
      </div>
    </div>
  );
};

export default Home;
