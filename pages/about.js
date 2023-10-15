import React from 'react'
import Head from 'next/head'
import styles from '@/styles/about.module.css'

const About = () => {
  return (
    <div className={styles.about}>
       <Head>
        <title>About Us</title>
        <meta name="description" content="About US" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/inBlog.png" />
      </Head>
        <h1 className='text-3xl my-6 font-serif font-bold'>About inBlog</h1>
        <h2 className='text-3xl mb-2'>Introduction</h2>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut dolor nemo. Amet et consequuntur rerum consectetur aliquid incidunt quisquam facere eveniet aspernatur, voluptatem, quas architecto accusantium cupiditate. Similique nesciunt ipsam dolores sunt excepturi, velit autem facere ex, eum magni et laborum a facilis dicta optio in hic impedit iure accusantium quisquam voluptates repellat deserunt nihil! Maiores a nisi amet tenetur est illum ut obcaecati, earum quam distinctio placeat sequi reiciendis accusantium architecto hic, voluptas sit dolorem eligendi excepturi. Omnis ab voluptatibus, saepe temporibus facilis aspernatur porro dolorem illo voluptas praesentium aliquid neque exercitationem reprehenderit ducimus est repellendus. Ipsa, molestias.</div>
        <h2 className='text-3xl mb-2'>About Creator</h2>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut dolor nemo. Amet et consequuntur rerum consectetur aliquid incidunt quisquam facere eveniet aspernatur, voluptatem, quas architecto accusantium cupiditate. Similique nesciunt ipsam dolores sunt excepturi, velit autem facere ex, eum magni et laborum a facilis dicta optio in hic impedit iure accusantium quisquam voluptates repellat deserunt nihil! Maiores a nisi amet tenetur est illum ut obcaecati, earum quam distinctio placeat sequi reiciendis accusantium architecto hic, voluptas sit dolorem eligendi excepturi. Omnis ab voluptatibus, saepe temporibus facilis aspernatur porro dolorem illo voluptas praesentium aliquid neque exercitationem reprehenderit ducimus est repellendus. Ipsa, molestias.</div>
        <h2 className='text-3xl mb-2'>About contributor</h2>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut dolor nemo. Amet et consequuntur rerum consectetur aliquid incidunt quisquam facere eveniet aspernatur, voluptatem, quas architecto accusantium cupiditate. Similique nesciunt ipsam dolores sunt excepturi, velit autem facere ex, eum magni et laborum a facilis dicta optio in hic impedit iure accusantium quisquam voluptates repellat deserunt nihil! Maiores a nisi amet tenetur est illum ut obcaecati, earum quam distinctio placeat sequi reiciendis accusantium architecto hic, voluptas sit dolorem eligendi excepturi. Omnis ab voluptatibus, saepe temporibus facilis aspernatur porro dolorem illo voluptas praesentium aliquid neque exercitationem reprehenderit ducimus est repellendus. Ipsa, molestias.</div>
    </div>
  )
}

export default About
