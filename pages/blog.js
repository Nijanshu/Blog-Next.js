import React, { useEffect, useState } from 'react'
import styles from '@/styles/blog.module.css'
import Link from 'next/link'
import Head from 'next/head'


const Blog = (props) => {

  const [blogs, setblogs] = useState(props.allBlogs)

  return (
    <>
    <Head>
        <title>Blogs</title>
        <meta name="description" content="inBlog Blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/inBlog.png" />
      </Head>
    <div>
      <h1 className={styles.head}>Latest Blogs: {blogs.length}</h1>

 {blogs.map((blog)=>{
 
 return <div className={styles.blog} key={blog.title}>
  
      <Link href={`/blogpost/${blog._id}`}>
        <h3 className={styles.title}>{blog.title}</h3>
         
        <div className={styles.desc}>
            {blog.description.substr(0,500)}...
        </div>
      </Link>
</div>
})}
      
    </div>
    </>
  )
}


// export async function getStaticProps(context) {   //Static Site generation
//   let data = await fs.promises.readdir("blogdata");
//   let myfile;
//   let allBlogs = [];
//   for (let index = 0; index < data.length; index++) {
//       const item = data[index];
//       console.log(item)
//       myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
//       allBlogs.push(JSON.parse(myfile))
//   }

//   return {
//       props: { allBlogs }, // will be passed to the page component as props
//   }
// }


export async function getServerSideProps(context) {
  let data =  await fetch(`https://newwwbackkk.onrender.com/api/notes/fetchnotes`, {
    method: 'GET', 
    headers: {
      "Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjYwZjA1NzBmMjliNjYxZDRjNWI2In0sImlhdCI6MTY5NzAyOTMxN30.TR-s19HixAFqeaJFYYnCM3zyAiXtshcneHNqpyVRTb0"
  
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  let allBlogs = await data.json()

  return {
      props: { allBlogs }, // will be passed to the page component as props
  }
}

export default Blog
