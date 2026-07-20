import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import LiquidBackground from './components/LiquidBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <LiquidBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Feedback />
        <Contact />
      </main>
    </div>
  );
}

export default App;
