"use client";
import Button from "../Button";

const HeroButton = () => {
  return (
    <Button onClick={() => console.log("Check out my course button")}>
      Check out my course!
    </Button>
  );
};

export default HeroButton;
