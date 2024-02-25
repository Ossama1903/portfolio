import HeroButton from "../HeroButton";

const Hero = () => {
  return (
    <div>
      <h4 className="mb-2">Hi, my name is</h4>
      <h1 className="text-5xl">Ossama Bin Bilal</h1>
      <h1 className="text-5xl">I build things for web.</h1>
      <p className="lg:max-w-[50%]">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <HeroButton />
      <h2>01. About Me</h2>
      <p>
        Hello! My name is Brittany and I enjoy creating things that live on the
        internet. My interest in web development started back in 2012 when I
        decided to try editing custom Tumblr themes — turns out hacking together
        a custom reblog button taught me a lot about HTML & CSS! Fast-forward to
        today, and I’ve had the privilege of working at an advertising agency, a
        start-up, a huge corporation, and a student-led design studio. My main
        focus these days is building accessible, inclusive products and digital
        experiences at Upstatement for a variety of clients. I also recently
        launched a course that covers everything you need to build a web app
        with the Spotify API using Node & React. Here are a few technologies
        I’ve been working with recently:
      </p>
    </div>
  );
};

export default Hero;
