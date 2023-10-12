import React, { useEffect, useState } from 'react'
import styles from '@/styles/blog.module.css'
import Head from 'next/head';


const slug = (props) => {
  const [blog, setblog] = useState(props.myBlog)

 
  if (!slug) {
    return <div>No slug provided.</div>;
  }

  return <div className={styles.blog}>
    <Head>
        <title>{blog.title}</title>
        <meta name="description" content="inBlog Blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/inBlog.png" />
      </Head>
    <h1 className={styles.title}> {blog&& blog.title}</h1>
    <hr />
    <div className={styles.desc}>
    {blog && <div dangerouslySetInnerHTML={createMarkup(blog.description)}></div>}
      </div>
    </div>;
};

// export async function getStaticPaths() {
//   return {
//       paths: [
//           { params: { slug: 'blog1' } },
//           { params: { slug: 'blog2' } },
//           { params: { slug: 'blog3' } },
//           { params: { slug: 'blog4' } },
//       ],
//       fallback: true // false or 'blocking'
//   };
// }

// export async function getStaticProps(context) {
//   const { slug } = context.params;
//   let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
//   return {
//       props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
//   }
// }


function createMarkup(c) {
  return { __html: c };
}


export async function getServerSideProps(context) {        //Server will fetch data from api not browser
  // console.log(context.query)
  // const router = useRouter();
  const { slug } = context.query;
  console.log(slug)
  let data = await fetch(`https://newwwbackkk.onrender.com/api/notes/getnote/${slug}`, {
    method: 'GET', 
    headers: {
      "Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjYwZjA1NzBmMjliNjYxZDRjNWI2In0sImlhdCI6MTY5NzAyOTMxN30.TR-s19HixAFqeaJFYYnCM3zyAiXtshcneHNqpyVRTb0"
  
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  let myBlog = await data.json()
  return {
      props: { myBlog }, // will be passed to the page component as props
  }
}


export default slug;
