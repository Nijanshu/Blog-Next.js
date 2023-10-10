import React, { useEffect, useState } from 'react'
import styles from '@/styles/blog.module.css'


const slug = (props) => {
  const [blog, setblog] = useState(props.myBlog)

 
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

export async function getServerSideProps(context) {
  // console.log(context.query)
  // const router = useRouter();
  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()
  return {
      props: { myBlog }, // will be passed to the page component as props
  }
}


export default slug;
