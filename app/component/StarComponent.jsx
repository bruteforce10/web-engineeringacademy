import React from "react";
import { FaStar } from "react-icons/fa";

const StarComponent = ({ rating }) => {
  return (
    <div className="flex gap-1 relative z-20 mb-4">
      {[...Array(rating)].map((_, index) => {
        return <FaStar key={index} className="text-yellow-500" />;
      })}
    </div>
  );
};

export default StarComponent;
