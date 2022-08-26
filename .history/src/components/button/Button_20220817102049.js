import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 bg-primary text-white  capitalize w-full rounded-lg mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
