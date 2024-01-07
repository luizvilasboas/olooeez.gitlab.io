import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-zinc-200'>
      <Header />
      <About />
      <main className='flex-1 container mx-auto'>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
