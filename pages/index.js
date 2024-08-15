import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'


const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  const customLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  
  return (
    <>
      <Head >
        <title>BioStem</title>
        <meta name="description" content="inBlog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      
     <main className={`${styles.main} ${inter.className}`}>
        

        <div className={styles.center}>
          <Image
            className='tw-w-[250px] tw-h-[250px] md:tw-my-24 tw-rounded-xl'
            loader={customLoader}
            src="/BioStem.png"
            alt="BioStem Logo"
            width={280}
            height={237}
            priority
          />
        </div>
<h2 className='md:tw-text-2xl tw-text-xl md:tw-my-4 tw-text-white tw-font-normal'>Enjoy the Biological Wonders</h2>
        <div className={styles.grid}>
          <Link
            href={'/blog'}
            className={styles.card}
            rel="noopener noreferrer"
            onClick={props.load}
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
