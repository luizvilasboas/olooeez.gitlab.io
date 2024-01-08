import React from 'react';
import { FaGitlab } from 'react-icons/fa6';
import { FaLink } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Budget Alchemy',
    demoLink: 'https://budget-alchemy.netlify.app',
    codeLink: 'https://gitlab.com/olooeez/budget-alchemy',
    description:
      'Plataforma online dedicada ao gerenciamento abrangente de finanças pessoais, oferecendo recursos para monitoramento de despesas e orçamento.',
    tags: ['React', 'Material UI'],
  },
  {
    id: 2,
    title: 'Stay Fit',
    demoLink: 'https://stay-fit-reactjs.netlify.app/',
    codeLink: 'https://gitlab.com/olooeez/stay-fit',
    description:
      'Plataforma online destinada ao treinamento, visualização e exploração de exercícios físicos, permitindo a busca por nome ou parte específica do corpo a ser trabalhada.',
    tags: ['React', 'Material UI', 'RapidAPI'],
  },
  {
    id: 3,
    title: 'Snapcorrect',
    codeLink: 'https://gitlab.com/ufv-projects/hackathon-2023',
    demoLink: null,
    description:
      'Site de correção de provas por marcação, 2º lugar na hackathon 2023 de visão computacional pela Pix Force. Gera relatório de acertos e erros em uma plataforma que faz o gerenciamento de notas.',
    tags: ['Flask', 'Tailwindcss', 'OpenCV', 'Numpy'],
  },
];

const Projects = () => {
  return (
    <>
      <div className='text-zinc-800 mt-10 md:mt-20 flex flex-col items-center text-center'>
        <h1 className='font-thin text-3xl mb-5'>Projetos</h1>
        <p className='font-light text-lg w-auto md:w-2/3 lg:w-2/3 mx-10'>
          Projetos opensource que eu desenvolvi ao longo do tempo, mostram um
          pouco do meu trabalho na área, abordando diferentes temas e
          tecnologias.
        </p>
      </div>
      <section
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'
        id='projects'
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className='bg-zinc-100 p-4 rounded-lg shadow-md text-zinc-800 mx-10'
          >
            <h3 className='text-xl font-normal mb-2'>{project.title}</h3>
            <p className='mb-4'>{project.description}</p>
            <div className='flex justify-start gap-5'>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-zinc-800 hover:text-zinc-950 transition'
                >
                  Demonstração <FaLink className='ml-2' />
                </a>
              )}
              <a
                href={project.codeLink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-zinc-800 hover:text-zinc-950 transition'
              >
                Código <FaGitlab className='ml-2' />
              </a>
            </div>
            <div className='mt-4 flex flex-wrap gap-1'>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className='bg-zinc-300 text-zinc-500 px-2 py-1 rounded-full'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
