import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
            // className={styles.logo}
            src="/inBlog.png"
            alt="Next.js Logo"
            width={280}
            height={237}
            priority
          />
        </div>
<h2 className={styles.hd}>Enjoy the Next Gen of Blogging</h2>
        <div className={styles.grid}>
          <Link
            href={'/blog'}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
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
