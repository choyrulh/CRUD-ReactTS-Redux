import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
};

const CustomButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = "primary",
  variant = "contained",
}) => {
  const buttonStyles = `
    py-2 px-4 rounded-md font-medium text-white
    ${color === "primary" ? "bg-blue-500" : "bg-gray-500"}
    ${variant === "contained" ? "hover:bg-blue-600" : "hover:bg-gray-600"}
    ${variant === "contained" ? "active:bg-blue-700" : "active:bg-gray-700"}
    ${variant === "contained" ? "focus:ring-blue-300" : "focus:ring-gray-300"}
    focus:outline-none focus:shadow-outline-blue
  `;

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default CustomButton;
