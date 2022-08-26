import React from "react";

const Button = ({
  onClick,
  className = "",
  children,
  type = "button",
  bgColor = "primary",
  ...props
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;

    default:
      break;
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-3 px-6 ${bgClassName} text-white  capitalize w-full rounded-lg mt-auto ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
