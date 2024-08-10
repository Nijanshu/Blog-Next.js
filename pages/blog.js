import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Spinner from './Spinner';

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs.slice(0, 8));
  const [search, setSearch] = useState('');
  const [clk, setClk] = useState(false);
  const [spinner, setSpinner] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(8);
  const [images, setImages] = useState(
    props.allBlogs.slice(0, 8).map(blog => blog.img)
  );

  const change = (e) => setSearch(e.target.value);

  const submit = (e) => {
    e.preventDefault();
    const filteredBlogs = props.allBlogs.filter(blog =>
      blog.description.toLowerCase().includes(search.toLowerCase())
    );
    setBlogs(filteredBlogs.slice(0, 8));
    setClk(true);
    setCurrentIndex(8);
    setImages(filteredBlogs.slice(0, 8).map(blog => blog.img)); // Update images
  };

  const loadMoreBlogs = () => {
    if (loadingMore || blogs.length >= props.allBlogs.length) return;
    setLoadingMore(true);
    const nextBlogs = props.allBlogs.slice(currentIndex, currentIndex + 8);
    setBlogs(prevBlogs => [...prevBlogs, ...nextBlogs]);
    setImages(prevImages => [
      ...prevImages,
      ...nextBlogs.map(blog => blog.img)
    ]);
    setCurrentIndex(currentIndex + 8);
    setLoadingMore(false);
  };

  const handleImageError = (index) => {
    setImages(prevImages =>
      prevImages.map((img, i) =>
        i === index ? 'https://0utwqfl7.cdn.imgeng.in/explore-academics/programs/images/graduate/AppliedBiomastersMH.jpg' : img
      )
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSpinner(false);
      } catch (error) {
        console.error('Error fetching blog data:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        !loadingMore
      ) {
        loadMoreBlogs();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadingMore, blogs, currentIndex]);

 
  const customLoader = ({ src, width, quality }) => {
    return `${src}`;
  };




  return (
    <div>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="inBlog Blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {!spinner && (
        <div>
          <form className='mx-auto mt-6 mb-4 flex md:w-[50%]' onSubmit={submit}>
            <input type="text" onChange={change} placeholder='search here' className='bg-slate-50 text-black border rounded-3xl w-[80%] px-3 py-2' value={search} />
            <input type='submit' className='bg-orange-600 mx-2 p-2 cursor-pointer rounded-3xl hover:bg-orange-700' />
          </form>
          {clk ? (
            <h1 className='text-center text-violet-500 text-4xl mt-4 font-bold font-serif'>Search Results: {blogs.length}</h1>
          ) : (
            <h1 className='text-center text-violet-500 text-4xl mt-4 font-bold font-serif'>Latest Blogs: {props.allBlogs.length}</h1>
          )}
        <section className="text-gray-300 bg-black body-font">
        <div className="container px-10 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogs.map((blog, index) => {
              const dat = new Date(blog.date);
              const options = { year: 'numeric', month: 'long', day: 'numeric' };
              const formattedDate = dat.toLocaleDateString('en-US', options);

              return (
                <div className="xl:w-1/4 md:w-1/2 p-4" data-aos="zoom-in" data-aos-duration="1000" key={blog._id}>
                  <Link href={`/blogpost/${blog._id}`}>
                    <div className="bg-gray-700 p-4 rounded-lg transition-all hover:scale-105 duration-200">
                      <Image
                      loader={customLoader}
                        src={images[index]}
                        onError={() => handleImageError(index)}
                        width={800}
                        height={500}
                        alt="content"
                      />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Date: {formattedDate}</h3>
                      <h2 className="text-lg text-gray-200 font-medium title-font mb-4">{blog.title}</h2>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

          {loadingMore && <Spinner />} {/* Show spinner while loading more blogs */}
        </div>
      )}
      {spinner && <Spinner />}
    </div>
  );
};

export async function getStaticProps(context) {
  try {
    const response = await fetch(`https://newwwbackkk.onrender.com/api/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjYwZjA1NzBmMjliNjYxZDRjNWI2In0sImlhdCI6MTY5NzAyOTMxN30.TR-s19HixAFqeaJFYYnCM3zyAiXtshcneHNqpyVRTb0',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blog data');
    }

    const allBlogs = await response.json();
    allBlogs.reverse();

    return {
      props: { allBlogs },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      props: { allBlogs: [] },
      revalidate: 10,
    };
  }
}

export default Blog;