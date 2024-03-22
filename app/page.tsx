"use client";
import x from "./fonts";
import { GitHub, LinkedIn } from "@mui/icons-material";
import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import Experience from "./components/Experience";
import Header from "./components/Header";
import HeadingWithBorder from "./components/HeadingWithBorder";
import Hero from "./components/Hero";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [currentFont, setCurrentFont] = useState(x.chilanka);
  const { ref: heroRef, inView: heroInView, entry: heroEntry } = useInView();

  const animateClasses = `${
    !heroInView ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
  } duration-1000`;

  return (
    <div className={`${currentFont} bg-inherit`}>
      <Header />
      <Container>
        <Hero />
        <div id="AboutMe" className={`py-2 bg-inherit ${animateClasses}`}>
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
      <div className="md:block fixed bottom-[8rem] right-[-5rem] hidden">
        <p className="rotate-90 text-xs">
          <a
            href="mailto:sheikhusamabilal@gmail.com"
            className="text-white no-underline"
          >
            s h e i k h u s a m a b i l a l @ g m a i l . c o m
          </a>
        </p>
      </div>
    </div>
  );
}
