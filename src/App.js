import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-backagroundWhite'>
      <Navbar />
      <About />
      <main className='flex-1 container mx-auto'>
        <Skills />
        <Projects />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
