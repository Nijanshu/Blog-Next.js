import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'


const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  
  const load = () => {
    if (props.setspinner) {
      props.setspinner(true);
      // Assuming you want to keep the spinner for 2 seconds as in your original code
      setTimeout(() => {
        props.setspinner(false);
      }, 5000);
    }
  };
  
  return (
    <>
      <Head>
        <title>inBlog</title>
        <meta name="description" content="inBlog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/inBlog.png" />
      </Head>
      
     <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          
        </div>

        <div className={styles.center}>
          <Image
            className='w-[250px] h-[250px] md:my-24 rounded-xl'
            src="/BioStem.png"
            alt="BioStem Logo"
            width={280}
            height={237}
            priority
          />
        </div>
<h2 className='md:text-2xl text-xl md:my-4'>Enjoy the Next Gen of Blogging</h2>
        <div className={styles.grid}>
          <Link
            href={'/blog'}
            className={styles.card}
            rel="noopener noreferrer"
            onClick={load}
          >

            <h3>
              Blogs <span>&gt;</span>
            </h3>
            <p>
              Explore Wide variety of content
            </p>
          </Link>

          
        </div>
      </main>
      
    </>
  )
}
