import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h3 className=" text-4xl text-white font-semibold">
        {props.title1} <span className=" text-green-500">{props.title2}</span>
      </h3>
    </div>
  );
};

export default Heading;