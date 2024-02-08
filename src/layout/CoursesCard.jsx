import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
const CoursesCard = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { direction } = props;

  return (
    <div
      className={`flex flex-col items-center justify-between bg-black  md:w-2/5 p-5 cursor-pointer rounded-xl border-r-4 border-b-8 border-r-green-800 border-b-green-800 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all  ${
        direction === "left" ? "slide-in-left" : "slide-in-right"
      }`}
      data-aos={direction === "left" ? "fade-right" : "fade-left"} 
      data-aos-duration="2000" 
    >
      <div className="w-3/5">
        <img src={props.img} alt="img" />
      </div>
      <div>
        <h3 className="font-bold text-green-500 text-2xl text-center my-5">
          {props.title}
        </h3>
        <p className="text-lightText text-center md:text-start">
          Description
        </p>
      </div>
    </div>
  );
};

export default CoursesCard;
