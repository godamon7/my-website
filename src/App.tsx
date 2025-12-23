import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </Layout>
  );
}