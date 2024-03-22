import { Button } from "@mui/material";
import fonts from "../../fonts";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView, entry } = useInView();
  const animateClasses = `${
    !inView ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
  } duration-1000`;

  return (
    <section
      ref={ref}
      id="hero"
      className={`mt-12 pt-[6rem] ${animateClasses}`}
    >
      <h4 className="mb-7 text-purple-400 font-normal">
        Hi, my name is
        {/* <Drawer /> */}
      </h4>
      <h1 className="text-5xl md:text-6xl my-4">Ossama Bin Bilal</h1>
      <h1 className="text-5xl md:text-6xl my-4">
        I'm a full stack web developer.
      </h1>
      <p className="transition lg:max-w-[60%] text-lg my-12 ">
        I’m a software engineer specializing in building exceptional digital
        experiences for my customers. Currently, I’m focused on building
        accessible, human-centered products to cater to the need of general
        population.
      </p>
      <Button
        className={`${fonts.chilanka} pt-3 px-3 transition hover:-translate-x-1 hover:-translate-y-1 ease-in-out hover:shadow-[2px_2px_3px_3px_rgba(192,132,252)] text-white border-solid border-[1px] border-purple-400`}
      >
        Check out my projects
      </Button>
    </section>
  );
};

export default Hero;
