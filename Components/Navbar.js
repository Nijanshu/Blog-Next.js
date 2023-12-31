import React from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const Navbar = (props) => {
  const load = () => {
    if (props.setspinner) {
      props.setspinner(true);
      // Assuming you want to keep the spinner for 2 seconds as in your original code
      setTimeout(() => {
        props.setspinner(false);
      },5000);
    }
  };

  return (
    <div>
      <nav className={styles.nav1}>
        <ul>
          <Link href='/' className='hover:translate-y-0.5 hover:underline transition-all'><li>Home</li></Link>
          <Link href='/about' className='hover:translate-y-0.5 hover:underline transition-all'><li>About</li></Link>
          {/* Call the load function when the "Blogs" link is clicked */}
          <Link href='/blog' className='hover:translate-y-0.5 hover:underline transition-all'><li onClick={load}>Blogs</li></Link>
          <Link href='/contact' className='hover:translate-y-0.5 hover:underline transition-all'><li>Contact Us</li></Link>
        </ul>
      </nav>
      <div className='flex'>
        {/* Additional content if needed */}
      </div>
    </div>
  );
};

export default Navbar;
