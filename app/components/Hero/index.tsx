import { Button } from "@mui/material";
import Drawer from "../Drawer";
import HeroButton from "../HeroButton";
import fonts from "../../fonts";

const Hero = () => {
  return (
    <section id="hero">
      <h4 className="mb-7 text-purple-400 font-normal">
        Hi, my name is
        {/* <Drawer /> */}
      </h4>
      <h1 className="text-5xl md:text-6xl my-4">Ossama Bin Bilal</h1>
      <h1 className="text-5xl md:text-6xl my-4">
        I'm a full stack web developer.
      </h1>
      <p className="lg:max-w-[60%] text-lg my-12 ">
        I’m a software engineer specializing in building exceptional digital
        experiences for my customers. Currently, I’m focused on building
        accessible, human-centered products to cater to the need of general
        population.
      </p>
      <Button
        className={`${fonts.chilanka} pt-3  px-3 hover:bg-purple-[rgba(109,40,217)] transition-colors duration-3000 ease-in-out shadow-[2px_2px_3px_3px_rgba(192,132,252)] text-white bg-purple-400`}
      >
        Check out my projects
      </Button>
    </section>
  );
};

export default Hero;
