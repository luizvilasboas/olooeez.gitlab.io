import React from 'react';
import Link from '../Link';
import { siteSections } from '../../data/siteSections';

const Navbar = () => {
  return (
    <header className='bg-backgroundBlack text-white p-4 sm:p-6 sticky top-0 z-50'>
      <nav className='container mx-auto'>
        <ul className='flex flex-wrap justify-center gap-4'>
          {siteSections.map((section, index) => (
            <li key={index}>
              <Link href={section.href}>{section.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
