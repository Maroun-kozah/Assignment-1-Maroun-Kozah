// App.jsx
import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/AboutMe';
import Projects from './Components/Projects';
import Contact from './Components/ContactUs';

function App() {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
  
    document.addEventListener('click', handleClick);
  
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  

  return (
    <div>
      <Header />
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}


export default App;
