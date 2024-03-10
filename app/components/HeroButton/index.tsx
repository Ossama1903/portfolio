"use client";
import Button from "../Button";

const HeroButton = () => {
  return (
    <Button
      className="px-7 py-3"
      onClick={() => console.log("Check out my course button")}
    >
      Check out my projects!
    </Button>
  );
};

export default HeroButton;
