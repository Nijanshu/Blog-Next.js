import React, { useEffect, useState } from 'react';
import styles from '@/styles/blog.module.css';
import Head from 'next/head';
import Place from '../placeholder';

const Slug = ({ myBlog }) => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error('Error fetching blog data:', error.message);
      } finally {
        setSpinner(false); // Set loading to false regardless of the outcome
      }
    };

    fetchData();
  }, [myBlog]);

  if (!myBlog) {
    return <div>No blog found.</div>;
  }

  const dat = new Date(myBlog.date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = dat.toLocaleDateString('en-US', options);

  return (
    <div className={styles.blog}>
      <Head>
        <title>{myBlog.title}</title>
        <meta name="description" content="inBlog Blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/inBlog.png" />
      </Head>

      {spinner && <Place />}

      {!spinner && myBlog && (
  
          <div dangerouslySetInnerHTML={createMarkup(myBlog.description)}></div>
      )}
    </div>
  );
};

function createMarkup(c) {
  return { __html: c };
}

// Add getStaticPaths to provide dynamic paths to be pre-rendered
export async function getStaticPaths() {
  // Fetch slugs or list of blogs from your backend or file system
  let data = await fetch('https://newwwbackkk.onrender.com/api/notes/fetchnotes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjYwZjA1NzBmMjliNjYxZDRjNWI2In0sImlhdCI6MTY5NzAyOTMxN30.TR-s19HixAFqeaJFYYnCM3zyAiXtshcneHNqpyVRTb0',
    },
  });
  let slugs = await data.json();
// Map the slugs to the required paths format (ensure slug is a string)
const paths = slugs.map((slugObj) => ({
  params: { slug: slugObj.description },  // Ensure slug is a string
}));


  return {
    paths, // Pre-render these paths at build time
    fallback: true, // fallback: true means other routes will be generated on demand
  };
}

// getStaticProps fetches the content for each dynamic path
export async function getStaticProps(context) {
  const { slug } = context.params;

  let data = await fetch(
    `https://newwwbackkk.onrender.com/api/notes/getnote/${slug}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjYwZjA1NzBmMjliNjYxZDRjNWI2In0sImlhdCI6MTY5NzAyOTMxN30.TR-s19HixAFqeaJFYYnCM3zyAiXtshcneHNqpyVRTb0',
      },
    }
  );
  let myBlog = await data.json();

  return {
    props: { myBlog }, // Pass data to the page component as props
  };
}

export default Slug;
