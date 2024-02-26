import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Container>
          <div
            className="bg-inherit py-8 relative"
            style={{
              borderTop: "1px solid red",
            }}
          >
            <h1 className="bg-inherit pr-3 absolute -top-5">01. About Me</h1>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS! Fast-forward to today, and I’ve had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients. I also recently launched a
              course that covers everything you need to build a web app with the
              Spotify API using Node & React. Here are a few technologies I’ve
              been working with recently:
            </p>
            <ul>
              <li>JavaScrpit (ES6+)</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Eleventy</li>
              <li>Node.js</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </Container>
      </Container>
      <h2>02. Where I've Worked</h2>
    </>
  );
}
