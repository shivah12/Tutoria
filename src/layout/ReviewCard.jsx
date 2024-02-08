import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl space-y-3 p-4 border-green-800 space-y-3 xl:pr-3 p-4 border-r-2 border-b-4 border-r-green-800 border-b-green">
      <div>
        <p className=" text-lightText">
          Great Website for learning and explaoring the details for  each course. I would recommend this website to anyone looking to learn coding or web development etc
        </p>
      </div>

      <div className=" flex flex-row justify-center">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
      </div>
    </div>
  );
};

export default ReviewCard;