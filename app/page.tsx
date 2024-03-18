import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import Experience from "./components/Experience";
import Header from "./components/Header";
import HeadingWithBorder from "./components/HeadingWithBorder";
import Hero from "./components/Hero";

import XIcon from "@mui/icons-material/X";
import Link from "next/link";

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
        <Link
          href="https://www.linkedin.com/in/ossama19/"
          target="_blank"
          className="text-white"
        >
          <LinkedIn className="mb-4" />
        </Link>
        <XIcon className="mb-4" />
        <GitHub className="mb-[9rem]" />
        <hr className="bg-white rotate-90 w-[15rem] ml-[-6.8rem]" />
      </div>
      <div className="md:block fixed bottom-[11rem] right-[-8rem] hidden">
        <p className="rotate-90">
          <a
            href="mailto:sheikhusamabilal@gmail.com"
            className="text-white no-underline"
          >
            s h e i k h u s a m a b i l a l @ g m a i l . c o m
          </a>
        </p>
      </div>
    </>
  );
}
