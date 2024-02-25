import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
      </Container>
      <ul>
        <li>JavaScrpit (ES6+)</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Eleventy</li>
        <li>Node.js</li>
        <li>Wordpress</li>
      </ul>
      <h2>02. Where I've Worked</h2>
    </>
  );
}
