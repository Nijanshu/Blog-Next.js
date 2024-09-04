import React from 'react';

import  "bootstrap/dist/css/bootstrap.min.css"
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const Navbar = (props) => {
  

  return (
    <div>
      <nav className={styles.nav1}>
        <ul>
          <li className='hover:tw-translate-y-0.5   tw-transition-all'>
            
          <Link href='/' className='tw-text-white hover:tw-underline tw-no-underline'>Home</Link>
          </li>
          <li className='hover:tw-translate-y-0.5   tw-transition-all'>

          <Link href='/about' className='tw-text-white hover:tw-underline tw-no-underline'>About</Link>
          </li>
          <li className='hover:tw-translate-y-0.5   tw-transition-all'>

          {/* Call the load function when the "Blogs" link is clicked */}
          <Link href='/blog' className='tw-text-white hover:tw-underline tw-no-underline' onClick={props.load}>Blogs</Link>
          </li>
          <li className='hover:tw-translate-y-0.5   tw-transition-all'>

          <Link href='/contact' className='tw-text-white hover:tw-underline tw-no-underline'>Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className='flex'>
        {/* Additional content if needed */}
      </div>
    </div>
  );
};

export default Navbar;
