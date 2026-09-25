import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <>
      <Header nombre="Caetano" profesion="estudiante de programación" />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

