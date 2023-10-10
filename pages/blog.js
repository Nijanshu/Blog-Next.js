import React, { useEffect, useState } from 'react'
import styles from '@/styles/blog.module.css'
import Link from 'next/link'

const Blog = () => {

  const [blogs, setblogs] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json()
    }).then((parsed)=>{
      setblogs(parsed)
    })
  },[])


  return (
    <div>
      <h1 className={styles.head}>Latest Blogs</h1>

{blogs.map((blog)=>{

return <div className={styles.blog} key={blog.title}>
  
      <Link href={`/blogpost/${blog.slug}`}>
        <h3 className={styles.title}>{blog.title}</h3>
        <div className={styles.desc}>
            {blog.description.substr(0, 500)}...
        </div>
      </Link>
</div>
})}
      
    </div>
   
  )
}



export default Blog
