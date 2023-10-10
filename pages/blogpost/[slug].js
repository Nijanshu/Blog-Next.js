import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '@/styles/blog.module.css'


const slug = () => {
  const [blog, setblog] = useState([])
  const router = useRouter();

  useEffect(()=>{
    if(!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
      return a.json()
    }).then((parsed)=>{
      setblog(parsed)
    })
  },[router.isReady])

  if (!slug) {
    return <div>No slug provided.</div>;
  }

  return <div className={styles.blog}>
    <h1 className={styles.title}>Title: {blog&& blog.title}</h1>
    <hr />
    <div className={styles.desc}>
        {blog&& blog.description}
      </div>
    </div>;
};



export default slug;
