import { skillList } from '../../data/skillList';
import Typography from '../Typography';
import Tag from '../Tag';

const Skills = () => {
  return (
    <section className='grid md:grid-cols-2 mt-10 md:mt-20 gap-10' id='skills'>
      <section className='flex flex-col justify-center items-center gap-10'>
        <Typography variant='h1' className='text-textBlack'>
          Habilidades
        </Typography>
        <Typography variant='p' className='w-auto md:w-2/3 text-textBlack mx-10'>
          Possuo habilidades técnicas na área de desenvolvimento de software,
          com experiência no desenvolvimento de projetos em diversas linguagens
          de programação e frameworks, abrangendo tanto o back-end quanto o
          front-end. Além disso, aplico técnicas de DevOps para o deploy de
          aplicações. Tenho experiência como freelancer, desenvolvendo
          aplicações web e scripts de automação.
        </Typography>
      </section>
      <section className='grid grid-row-4 gap-5 w-fit mx-5'>
        {skillList.map((category, index) => (
          <div key={index}>
            <Typography
              variant='h1'
              className='mb-5 text-textBlack text-center md:text-start text-2xl'
            >
              {category.title}
            </Typography>
            <ul className='flex justify-center md:justify-start flex-wrap gap-2'>
              {category.skills.map((skill, index) => (
                <Tag key={index}>{skill}</Tag>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Skills;
