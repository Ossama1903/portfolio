import AboutMe from "./components/AboutMe";
import Container from "./components/Container";
import Header from "./components/Header";
import HeadingWithBorder from "./components/HeadingWithBorder";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="my-12 py-12 mb-12">
          <div className="my-12 py-12 mb-12">
            <Hero />
          </div>
        </div>
        <div id="aboutMe" className="py-12 bg-inherit">
          <HeadingWithBorder heading="01. About Me">
            <AboutMe />
          </HeadingWithBorder>
        </div>
      </Container>
      <h2>02. Where I've Worked</h2>
    </>
  );
}
