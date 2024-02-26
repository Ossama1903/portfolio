"use client";
import Button from "../Button";

const HeroButton = () => {
  return (
    <Button
      className="px-10 py-5"
      onClick={() => console.log("Check out my course button")}
    >
      Check out my course!
    </Button>
  );
};

export default HeroButton;
