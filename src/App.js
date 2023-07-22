import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header aboutRef={aboutRef} contactRef={contactRef} projectsRef={projectsRef} />
      <div className="container">
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
