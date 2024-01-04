import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='mt-auto bg-zinc-800 text-white p-6 sm:p-10 lg:p-16 flex flex-col md:flex-row justify-evenly'>
      <nav className='mb-6 md:mb-0'>
        <h1 className='text-lg mb-4'>Páginas</h1>
        <ul className='flex flex-col gap-2 underline text-sm'>
          <li>
            <a className='hover:text-slate-300 transition' href='#about'>
              Sobre Mim
            </a>
          </li>
          <li>
            <a className='hover:text-slate-300 transition' href='#projects'>
              Projetos
            </a>
          </li>
          <li>
            <a
              className='hover:text-slate-300 transition'
              href='#skills'
            >
              Habilidades
            </a>
          </li>
          <li>
            <a className='hover:text-slate-300 transition' href='#contact'>
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <section className='mb-6 md:mb-0'>
        <h1 className='text-lg mb-4'>Redes Sociais</h1>
        <ul className='flex flex-col gap-2 underline text-sm'>
          <li>
            <a
              className='hover:text-slate-300 transition'
              href='https://gitlab.com/olooeez'
              target='_blank'
              rel='noreferrer'
            >
              GitLab
            </a>
          </li>
          <li>
            <a
              className='hover:text-slate-300 transition'
              href='https://fosstodon.org/@olooeez'
              target='_blank'
              rel='noreferrer'
            >
              Mastodon
            </a>
          </li>
          <li>
            <a
              className='hover:text-slate-300 transition'
              href='https://linkedin.com/in/olooeez'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className='hover:text-slate-300 transition'
              href='https://reddit.com/u/olooeez'
              target='_blank'
              rel='noreferrer'
            >
              Reddit
            </a>
          </li>
        </ul>
      </section>
      <div className='flex flex-col gap-5 text-sm'>
        <button
          className='bg-zinc-500 w-full p-3 font-bold rounded-md hover:bg-zinc-600 transition'
          onClick={handleScrollToTop}
        >
          Voltar ao Topo
        </button>
        <span>
          © {currentYear} Luiz Felipe de Castro Vilas Boas. Todos os direitos reservados.
        </span>
        <span>
          O código-fonte deste site está disponível{' '}
          <a
            className='hover:text-slate-300 transition underline'
            href='https://gitlab.com/olooeez/olooeez.gitlab.io'
            target='_blank'
            rel='noreferrer'
          >
            aqui
          </a>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
