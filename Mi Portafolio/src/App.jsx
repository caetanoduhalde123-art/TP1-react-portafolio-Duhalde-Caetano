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
      <Header nombre="Alejandro Caetano Duhalde" profesion="estudiante de programacion en la UTN" />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

