"use client";
import Image from "next/image";
import HeadingWithBorder from "../HeadingWithBorder";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const AboutMe = () => {
  const { ref, inView, entry } = useInView();
  const animateClasses = `${
    !inView ? "opacity-0 translate-y-10" : "opacity-100 -translate-y-0"
  } duration-1000`;

  useEffect(() => {
    console.log(`about me ${inView}`);
  }, [inView]);

  return (
    <div ref={ref} id="AboutMe" className={`py-2 bg-inherit ${animateClasses}`}>
      <div className="my-12 py-12 bg-inherit">
        <div className="py-12 bg-inherit">
          <HeadingWithBorder heading="01. About Me">
            <div className={`grid grid-cols-12 xl:gap-x-20 `}>
              <div className="col-span-12 lg:col-span-8">
                <p>
                  Hello! My name is Ossama and I enjoy creating things that live
                  on the internet. My interest in web development started back
                  in 2012 when I decided to try editing custom Tumblr themes —
                  turns out hacking together a custom reblog button taught me a
                  lot about HTML & CSS!
                </p>
                <br />
                <p>
                  Fast-forward to today, and I’ve had the privilege of working
                  at an advertising agency, a start-up, a huge corporation, and
                  a student-led design studio. My main focus these days is
                  building accessible, inclusive products and digital
                  experiences at Upstatement for a variety of clients. I also
                  recently launched a course that covers everything you need to
                  build a web app with the Spotify API using Node & React.
                </p>
                <br />
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
                <div className="grid grid-cols-12 mt-6">
                  <ul className="col-span-6 md:col-span-4 list-none mb-4 xl:mb-0">
                    <li className="mb-1 text-purple-400 font-medium">
                      JavaScript (ES6+)
                    </li>
                    <li className="mb-1 text-purple-400 font-medium">
                      Typescript
                    </li>
                    <li className="mb-1 text-purple-400 font-medium">Python</li>
                    <li className="mb-1 text-purple-400 font-medium">NestJS</li>
                  </ul>
                  <ul className="col-span-6 md:col-span-4 list-none mb-4 xl:mb-0">
                    <li className="mb-1 text-purple-400 font-medium">
                      NodeJS (ES6+)
                    </li>
                    <li className="mb-1 text-purple-400 font-medium">
                      ExpressJS
                    </li>
                    <li className="mb-1 text-purple-400 font-medium">
                      ReactJS
                    </li>
                  </ul>
                  <ul className="col-span-6 md:col-span-4 list-none mb-4 xl:mb-0">
                    <li className="mb-1 text-purple-400 font-medium">
                      FastAPI
                    </li>
                    <li className="mb-1 text-purple-400 font-medium">Django</li>
                    <li className="mb-1 text-purple-400 font-medium">NextJS</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-12 xl:col-span-4 flex justify-center items-center lg:justify-normal lg:items-stretch xl:justify-center xl:items-center mt-12 xl:mt-0">
                <Image
                  src="/images/me.jpeg"
                  alt="Portfolio picture of Ossama Bin Bilal"
                  width={300}
                  height={300}
                  className="rounded-[50%]"
                />
              </div>
            </div>
          </HeadingWithBorder>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
