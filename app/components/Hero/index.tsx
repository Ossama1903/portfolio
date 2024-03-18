import Drawer from "../Drawer";
import HeroButton from "../HeroButton";

const Hero = () => {
  return (
    <section id="hero">
      <h4 className="mb-7 text-purple-400 text-xl font-normal">
        Hi, my name is
        {/* <Drawer /> */}
      </h4>
      <h1 className="text-5xl md:text-6xl lg:text-7x my-4">Ossama Bin Bilal</h1>
      <h1 className="text-5xl md:text-6xl lg:text-7x my-4">
        I'm a full stack web developer.
      </h1>
      <p className="lg:max-w-[60%] text-lg my-12 ">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <HeroButton />
    </section>
  );
};

export default Hero;
