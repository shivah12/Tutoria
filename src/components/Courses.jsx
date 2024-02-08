import React, { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/web-dev1.svg";
import appImg from "../assets/web-dev.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";
import "../layout/animations.css"; 

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const coursesSection = document.getElementById("courses");

      if (coursesSection) {
        const coursesSectionTop = coursesSection.offsetTop;
        const coursesSectionHeight = coursesSection.offsetHeight;

        if (currentScroll > coursesSectionTop - (coursesSectionHeight / 2)) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center md:px-32 px-5 my-10 ${isVisible ? "" : ""}`} id="courses">
      <Heading title1="Our" title2="Courses" />

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard img={webImg} title="Web Development" direction="bottom"  />
        <CoursesCard img={appImg} title="App Development" direction="bottom" />
        <CoursesCard img={graphicImg} title="Graphic Designer" direction="bottom" />
        <CoursesCard img={digitalImg} title="Digital Marketing" direction="bottom" />
      </div>
    </div>
  );
};

export default Courses;
