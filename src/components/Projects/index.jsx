import React from 'react';
import { FaGitlab } from 'react-icons/fa6';
import { FaLink } from 'react-icons/fa';
import { projectList } from '../../data/projectList';
import Typography from '../Typography';
import Link from '../Link';
import Tag from '../Tag';
import Button from '../Button';
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element name='projects'>
      <div className='text-textBlack mt-10 md:mt-20 flex flex-col items-start text-center mx-10'>
        <Typography variant='h1' className='mb-5'>
          Projetos
        </Typography>
        <Typography variant='p' className='w-auto md:w-2/3 lg:w-2/3 text-start'>
          Projetos opensource que eu desenvolvi ao longo do tempo, mostram um
          pouco do meu trabalho na área, abordando diferentes temas e
          tecnologias.
        </Typography>
      </div>
      <section
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'
        id='projects'
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            className='bg-zinc-100 p-4 rounded-lg shadow-md text-textBlack mx-10'
          >
            <Typography variant='h1' className='text-xl mb-2'>
              {project.title}
            </Typography>
            <Typography variant='p' className='mb-4 text-base leading-relaxed'>
              {project.description}
            </Typography>
            <div className='flex justify-start gap-5'>
              {project.demoLink && (
                <Link
                  href={project.demoLink}
                  blank={true}
                  className='flex items-center justify-center no-underline hover:text-zinc-600'
                >
                  Demonstração <FaLink className='ml-2' size={15} />
                </Link>
              )}
              <Link
                href={project.codeLink}
                blank={true}
                className='flex items-center justify-center no-underline hover:text-zinc-600'
              >
                Código <FaGitlab className='ml-2' size={15} />
              </Link>
            </div>
            <div className='mt-4 flex flex-wrap gap-1'>
              {project.tags.map((tag, index) => (
                <Tag key={index} className='py-1 px-2 bg-backagroundWhite'>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </section>
      <div className='w-full flex items-center justify-center  mt-20'>
        <Button className='max-w-lg' onClick={() => window.open('https://gitlab.com/olooeez', '_blank')}>
          Mais projetos no meu perfil do GitLab
        </Button>
      </div>
    </Element>
  );
};

export default Projects;
