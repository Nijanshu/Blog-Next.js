import React from 'react';

import  "bootstrap/dist/css/bootstrap.min.css"
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const Navbar = (props) => {
  

  return (
    <div>
      <nav className={styles.nav1}>
        <ul>
          <Link href='/' className='hover:tw-translate-y-0.5 hover:tw-underline tw-no-underline tw-text-white tw-transition-all'><li>Home</li></Link>
          <Link href='/about' className='hover:tw-translate-y-0.5 hover:tw-underline tw-no-underline tw-text-white tw-transition-all'><li>About</li></Link>
          {/* Call the load function when the "Blogs" link is clicked */}
          <Link href='/blog' className='hover:tw-translate-y-0.5 hover:tw-underline tw-no-underline tw-text-white tw-transition-all'><li onClick={props.load}>Blogs</li></Link>
          <Link href='/contact' className='hover:tw-translate-y-0.5 hover:tw-underline tw-no-underline tw-text-white tw-transition-all'><li>Contact Us</li></Link>
        </ul>
      </nav>
      <div className='flex'>
        {/* Additional content if needed */}
      </div>
    </div>
  );
};

export default Navbar;
