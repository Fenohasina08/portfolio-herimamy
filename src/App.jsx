import React, { useState, useEffect } from 'react';
import Navbar      from './components/layout/Navbar';
import Hero        from './components/sections/Hero';
import About       from './components/sections/About';
import Skills      from './components/sections/Skills';
import Experience  from './components/sections/Experience';
import Projects    from './components/sections/Projects';
import Contact     from './components/sections/Contact';
import Footer      from './components/layout/Footer';
import Chatbot     from './components/common/Chatbot';
import ScrollProgress from './components/common/ScrollProgress';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen transition-colors duration-500">
      <ScrollProgress />
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <ScrollToTop />
    </div>
  );
}

export default App;
