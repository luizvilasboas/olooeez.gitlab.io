const Header = () => {
  return (
    <header className='bg-zinc-800 text-white p-5 sticky'>
      <nav>
        <ul className='flex gap-5 justify-center'>
          <li>
            <a
              className='bg-zinc-500 p-2 rounded-md hover:bg-zinc-400 transition'
              href='#'
            >
              Home
            </a>
          </li>
          <li>
            <a
              className='bg-zinc-500 p-2 rounded-md hover:bg-zinc-400 transition'
              href='#about'
            >
              About
            </a>
          </li>
          <li>
            <a
              className='bg-zinc-500 p-2 rounded-md hover:bg-zinc-400 transition'
              href='#projects'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className='bg-zinc-500 p-2 rounded-md hover:bg-zinc-400 transition'
              href='#education_work'
            >
              Education & Work
            </a>
          </li>
          <li>
            <a
              className='bg-zinc-500 p-2 rounded-md hover:bg-zinc-400 transition'
              href='#contact'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
