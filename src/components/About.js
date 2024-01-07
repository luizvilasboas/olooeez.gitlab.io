import React from 'react';
import ouroPreto from '../assets/img/ouro-preto.jpg';
import me from '../assets/img/me.jpg';
import { FaGitlab, FaMastodon, FaLinkedin, FaReddit } from "react-icons/fa6";

const About = () => {
  return (
    <section
      id='about'
      className='flex flex-col md:flex-row justify-evenly items-center gap-4 relative bg-current bg-center bg-cover bg-no-repeat p-10'
      data-aos='fade-up'
      style={{
        backgroundImage: `linear-gradient(70deg, rgba(250, 250, 250, 1), rgba(169, 169, 169, 0.9)), url(${ouroPreto})`,
      }}
    >
      <div className='md:w-1/2 text-left md:p-8 text-zinc-800'>
        <h1 className='font-normal text-3xl mb-4 leading-relaxed'>
          Oi, meu nome é Luiz Felipe e eu sou um {' '}
          <span className='font-semibold capitalize'>
            desenvolvedor de software
          </span>
        </h1>
        <p className='my-8 text-lg text-pretty'>
          Sou aluno do curso de Sistemas de Informação na UFV (Universidade
          Federal de Viçosa). Tenho experiência como desenvolvedor front-end e,
          em grande parte, meus projetos são de código aberto. Geralmente, estou
          aberto a aceitar solicitações de mesclagem (merge requests) em todos
          os meus projetos, a menos que eu indique o contrário.
        </p>
        <div>
          <ul className='flex space-x-5'>
            <li>
              <a
                className='hover:text-zinc-950 transition underline'
                href='https://gitlab.com/olooeez'
                target='_blank'
                rel='noreferrer'
              >
                <FaGitlab scale={true} size={25} />
              </a>
            </li>
            <li>
              <a
                className='hover:text-zinc-950 transition underline'
                href='https://fosstodon.org/@olooeez'
                target='_blank'
                rel='noreferrer'
              >
                <FaMastodon scale={true} size={25} />
              </a>
            </li>
            <li>
              <a
                className='hover:text-zinc-950 transition underline'
                href='https://linkedin.com/in/olooeez'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin scale={true} size={25} />
              </a>
            </li>
            <li>
              <a
                className='hover:text-zinc-950 transition'
                href='https://reddit.com/u/olooeez'
                target='_blank'
                rel='noreferrer'
              >
                <FaReddit scale={true} size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center mt-4 md:mt-0'>
        <img
          src={me}
          alt='User Avatar'
          className='rounded-full border-2 border-black w-32 h-32 md:w-52 md:h-52'
        />
      </div>
    </section>
  );
};

export default About;
