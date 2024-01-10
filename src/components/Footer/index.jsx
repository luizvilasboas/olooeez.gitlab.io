import React from 'react';
import Link from '../Link';
import Typography from '../Typography';
import { socialLinks } from '../../data/socialLinks';
import { siteSections } from '../../data/siteSections';
import Button from '../Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='mt-auto bg-backgroundBlack p-6 sm:p-10 lg:p-16 flex flex-col md:flex-row justify-evenly text-textWhite'>
      <nav className='mb-6 md:mb-0'>
        <Typography variant='h1' className='text-lg mb-4 text-textWhite'>
          Páginas
        </Typography>
        <ul className='flex flex-col gap-2 underline'>
          {siteSections.map((section, index) => (
            <li key={index}>
              <Link href={section.href}>{section.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className='mb-6 md:mb-0'>
        <Typography variant='h1' className='text-lg mb-4 text-textWhite'>
          Redes Sociais
        </Typography>
        <ul className='flex flex-col gap-2 underline'>
          {socialLinks.map((social, index) => (
            <li key={index}>
              <Link href={social.url} blank={true}>
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className='flex flex-col gap-5 text-textWhite'>
        <Button onClick={handleScrollToTop}>Voltar ao Topo</Button>
        <Typography variant='p' className='text-textWhite text-base'>
          © {currentYear} Luiz Felipe de Castro Vilas Boas. Todos os direitos
          reservados.
        </Typography>
        <Typography variant='p' className='text-textWhite text-base'>
          O código-fonte deste site está disponível{' '}
          <Link
            href='https://gitlab.com/olooeez/olooeez.gitlab.io'
            blank={true}
          >
            aqui
          </Link>
          .
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
