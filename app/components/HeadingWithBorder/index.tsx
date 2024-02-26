import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
}

const HeadingWithBorder = ({ heading, children }: Props) => {
  return (
    <div
      className="bg-inherit py-8 relative"
      style={{
        borderTop: "1px solid red",
      }}
    >
      <h1 className="bg-inherit pr-3 absolute -top-5">{heading}</h1>
      {children}
    </div>
  );
};

export default HeadingWithBorder;
