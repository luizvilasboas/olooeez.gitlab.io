const Skills = () => {
  const skillsData = [
    {
      title: 'Linguagens de Programação',
      skills: ['C', 'C++', 'Python', 'Javascript', 'PHP', 'Go'],
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Symfony', 'Laravel', 'Gin', 'Flask'],
    },
    {
      title: 'Banco de dados',
      skills: ['MySQL', 'PostgreSQL', 'SQLite'],
    },
    {
      title: 'Outros',
      skills: ['Git', 'Docker', 'Docker Compose', 'Linux', 'CI/CD'],
    },
  ];

  return (
    <section className='grid md:grid-cols-2 mt-10 md:mt-20 gap-10' id='skills'>
      <section className='flex flex-col justify-center items-center gap-10'>
        <h1 className='text-3xl text-zinc-800 font-thin'>Habilidades</h1>
        <p className='w-auto md:w-2/3 text-lg text-zinc-800 leading-loose font-light mx-10'>
          Possuo habilidades técnicas na área de desenvolvimento de software,
          com experiência no desenvolvimento de projetos em diversas linguagens
          de programação e frameworks, abrangendo tanto o back-end quanto o
          front-end. Além disso, aplico técnicas de DevOps para o deploy de
          aplicações. Tenho experiência como freelancer, desenvolvendo
          aplicações web e scripts de automação.
        </p>
      </section>
      <section className='grid grid-row-4 gap-5 w-fit mx-5'>
        {skillsData.map((category, index) => (
          <div key={index}>
            <h1 className='mb-5 text-2xl font-thin text-zinc-800 text-center md:text-start'>
              {category.title}
            </h1>
            <ul className='flex justify-center md:justify-start flex-wrap gap-2'>
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className='bg-zinc-300 py-3 px-5 rounded-xl text-zinc-500'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Skills;
