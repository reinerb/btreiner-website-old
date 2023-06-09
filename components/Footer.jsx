import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-3 text-zinc-950 dark:text-zinc-50 bg-zinc-200 dark:bg-zinc-950 md:px-6 md:py-3 px-4 py-2'>
      <p>Copyright &copy; Benjamin Reiner, 2023.</p>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
