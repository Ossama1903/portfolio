import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Container = ({ children }: Props) => {
  return <div className="w-11/12 md:w-4/6 mx-auto py-10 bg-inherit">{children}</div>;
};

export default Container;
