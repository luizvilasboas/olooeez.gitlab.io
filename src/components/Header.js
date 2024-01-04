import React from 'react';

const Header = () => {
  return (
    <header className='bg-zinc-800 text-white p-4 sm:p-6 sticky top-0 z-50'>
      <nav className='container mx-auto'>
        <ul className='flex flex-wrap justify-center gap-4'>
          <li>
            <a
              className='nav-link hover:text-slate-300 underline transition'
              href='#about'
            >
              Sobre Mim
            </a>
          </li>
          <li>
            <a
              className='nav-link hover:text-slate-300 underline transition'
              href='#projects'
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              className='nav-link hover:text-slate-300 underline transition'
              href='#skills'
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              className='nav-link hover:text-slate-300 underline transition'
              href='#contact'
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
