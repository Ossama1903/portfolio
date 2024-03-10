import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import Experience from "./components/Experience";
import Header from "./components/Header";
import HeadingWithBorder from "./components/HeadingWithBorder";
import Hero from "./components/Hero";

import XIcon from "@mui/icons-material/X";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="mt-12 pt-12">
          <div className="py-12">
            <Hero />
          </div>
        </div>
        <div id="AboutMe" className="py-2 bg-inherit">
          <div className="my-12 py-12 bg-inherit">
            <div className="py-12 bg-inherit">
              <HeadingWithBorder heading="01. About Me">
                <AboutMe />
              </HeadingWithBorder>
            </div>
          </div>
        </div>
        <div id="Experience" className="bg-inherit">
          <HeadingWithBorder heading="02. My Work Experience">
            <Experience />
          </HeadingWithBorder>
        </div>
      </Container>
      <div className="md:flex flex-col fixed bottom-5 left-5 hidden">
        <LinkedIn className="mb-4" />
        <XIcon className="mb-4" />
        <GitHub className="mb-4" />
        <Instagram className="mb-[9rem]" />
        <hr className="bg-white rotate-90 w-[15rem] ml-[-6.8rem]" />
      </div>
    </>
  );
}
