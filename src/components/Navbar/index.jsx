import React from 'react';
import { Link } from 'react-scroll';
import { siteSections } from '../../data/siteSections';

const Navbar = () => {
  return (
    <header className='bg-backgroundBlack text-white p-4 sm:p-6 sticky top-0 z-50'>
      <nav className='container mx-auto'>
        <ul className='flex flex-wrap justify-center gap-4'>
          {siteSections.map((section, index) => (
            <li key={index}>
              <Link
                className='hover:text-slate-300 underline transition cursor-pointer'
                to={section.href} 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500} 
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
