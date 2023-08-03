// button component

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: "primary" | "link" | "outline";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const buttonVariants = {
  primary: "bg-red-500 hover:bg-red-600",
  link: "bg-transparent hover:bg-transparent",
  outline: "bg-transparent border-2 border-red-500 hover:bg-red-500",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = "primary",
  iconLeft,
  iconRight,
}) => {
  return (
    <button
      className={`flex items-center justify-center px-5 py-3 rounded-lg ${buttonVariants[variant]} ${className}`}
      onClick={onClick}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};
