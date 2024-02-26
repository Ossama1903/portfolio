"use client";

import { ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      className={`rounded-md bg-transparent text-purple-400 text-lg ${className}`}
      style={{ border: "1px solid rgb(192, 132, 252)" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
