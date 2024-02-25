"use client";

import { ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
