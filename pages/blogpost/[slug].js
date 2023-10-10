import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/blog.module.css'


const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <div>No slug provided.</div>;
  }

  return <div className={styles.blog}>
    <h1 className={styles.title}>Title: {slug}</h1>
    <hr />
    <div className={styles.desc}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tempora ducimus eligendi commodi vero odit, debitis, architecto vel quo consectetur omnis, dolorem quis nostrum saepe. Cumque doloribus ab veniam illo!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tempora ducimus eligendi commodi vero odit, debitis, architecto vel quo consectetur omnis, dolorem quis nostrum saepe. Cumque doloribus ab veniam illo!
    </div>
    </div>;
};

export default slug;
