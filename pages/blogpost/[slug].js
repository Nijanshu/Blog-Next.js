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

export async function getStaticPaths() {
  try {
    // Fetch slugs or list of blogs from your backend or file system
    let response = await fetch('https://newwwbackkk.onrender.com/api/notes/fetchnotes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjYwZjA1NzBmMjliNjYxZDRjNWI2In0sImlhdCI6MTY5NzAyOTMxN30.TR-s19HixAFqeaJFYYnCM3zyAiXtshcneHNqpyVRTb0',
      },
    });

    // Check if the response is valid
    if (!response.ok) {
      throw new Error(`Failed to fetch data, received status ${response.status}`);
    }

    let notes = await response.json();

    // Assuming the API returns a list of notes with a `slug` field or similar identifier
    const paths = notes.map((note) => ({
      params: { slug: note._id.toString() },  // Ensure `slug` is a string
    }));

    return {
      paths, // Pre-render these paths at build time
      fallback: true, // Fallback to dynamically generate pages if the path is not generated at build time
    };

  } catch (error) {
    console.error('Error in getStaticPaths:', error.message);

    return {
      paths: [],
      fallback: true, // Handle dynamically generating pages even if no paths are pre-rendered
    };
  }
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
