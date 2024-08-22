import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';
import axios from 'axios';


import Spinner from './Spinner';

import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs.slice(0, 8));
  const [clk, setClk] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(8);
  const [images, setImages] = useState(
    props.allBlogs.map(blog => blog.img)
  );

  const [spinn, setSpinn] = useState(true);


  const [query, setQuery] = useState('');
  const [searchParam] = useState(["title", "description"]);


  useEffect(() => {

      // e.preventDefault();
      const titleMatches = props.allBlogs.filter(blog =>
        blog.title.toLowerCase().includes(query.toLowerCase())
      );
      const tagMatches = props.allBlogs.filter(blog =>
        blog.tag.toLowerCase().includes(query.toLowerCase()) &&
        !blog.title.toLowerCase().includes(query.toLowerCase())
      );
      
      
      
      const filteredBlogs = [...titleMatches, ...tagMatches];
    setBlogs(filteredBlogs);
    setClk(true);

    if(query==''){
      setClk(false);
    }
    // setLoadingMore(false);
    // setCurrentIndex(8);
    setImages(filteredBlogs.map(blog => blog.img));
  },[query]);

  // useEffect(() => {
   
  //     setSpinn(true);
  //     console.log(spinn)
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve,2000));

        setSpinn(false);
      } catch (error) {
        console.error('Error fetching blog data:', error.message);
      }
    };

    fetchData();
  }, []);

  const CustomCard = styled(Card)`
   background-color: #1a2023e0;
   text-decoration: none;
   
`;

  

  const handleImageError = (index) => {
    setImages(prevImages =>
      prevImages.map((img, i) =>
        i === index ? 'https://0utwqfl7.cdn.imgeng.in/explore-academics/programs/images/graduate/AppliedBiomastersMH.jpg' : img
      )
    );
  };

   


  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop >=
  //         document.documentElement.offsetHeight - 100 &&
  //       !loadingMore
  //     ) {
  //       loadMoreBlogs();
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [loadingMore, currentIndex]);

 
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
      
        <div>
          <form className='tw-mx-auto tw-mt-6 tw-mb-4 tw-flex tw-justify-center md:tw-w-[50%]'>
            <input type="text" placeholder='search here' className='tw-bg-slate-50 tw-text-black tw-border tw-rounded-3xl tw-w-[80%] tw-px-3 tw-py-2' value={query} onChange={(e) => setQuery(e.target.value)}/>
          </form>
          {clk ? (
            <h1 className='tw-text-center tw-text-violet-500 tw-text-4xl tw-mt-4 tw-font-bold tw-font-serif'>Search Results: {blogs.length}</h1>
          ) : (
            <h1 className='tw-text-center tw-text-violet-500 tw-text-4xl tw-mt-4 tw-font-bold tw-font-serif'>Latest Blogs: {props.allBlogs.length}</h1>
          )}
        <div className="tw-container tw-px-10 tw-py-10 tw-mx-auto">
          <div className="tw-flex tw-flex-wrap tw--m-4">
            {/* {
              spinner &&
            blogs.map((blog, index) => {
              return (
                <div className="xl:tw-w-1/4 md:tw-w-1/2 tw-p-4" data-aos="zoom-in" data-aos-duration="1000" key={blog._id}>
      <Card className="tw-bg-gray-700 tw-p-4 tw-rounded-lg">
      <Card.Img variant="top" src="holder.js/100px180" width={800}
        height={500} className='tw-h-3/6'/>
        <Card.Body>
          <Placeholder as={Card.h3} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.h2} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>

     
      </div>
      )
            })
          } */}

          {
            spinn &&
            blogs.map((blog, index) => {
              return (
                <div className="xl:tw-w-1/4 md:tw-w-1/2 tw-p-4 tw-w-full" data-aos="zoom-in" data-aos-duration="1000" key={blog._id}>
                  <CustomCard className="tw-p-4 tw-rounded-lg ">
        <div className="tw-animate-pulse">
                    
                    {/* <Card.Img variant="top" className="tw-img-fluid tw-placeholder-glow" width={800}  height={500}/> */}
                      <Placeholder as={Card.Img} className="tw-img-fluid tw-placeholder-glow" variant="top" width={800}
        height={500}/>
                    {/* </Card.Img> */}
                    <CustomCard.Body>
                      <h5 className="card-title tw-placeholder-glow">
                        <Placeholder xs={6} />
                      </h5>
                      <p className="card-text tw-placeholder-glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                      </p>
                    </CustomCard.Body>
                    </div>
                  </CustomCard>
        
        
                   
                </div>
              )
            })
          
          }
          {
      !spinn && 
            blogs.map((blog, index) => {
              const dat = new Date(blog.date);
              const options = { year: 'numeric', month: 'long', day: 'numeric' };
              const formattedDate = dat.toLocaleDateString('en-US', options);

              return (
                <div className="xl:tw-w-1/4 md:tw-w-1/2 tw-p-4" data-aos="zoom-in" data-aos-duration="1000" key={blog._id}>
                  <Link href={`/blogpost/${blog._id}`} className='text-decoration-none' onClick={props.load}>
                   
      <CustomCard className="tw-p-4 tw-rounded-lg tw-transition-all hover:tw-scale-105 tw-duration-200 ">
        <CustomCard.Img 
        loader={customLoader}
        src={images[index]}
        onError={() => handleImageError(index)}
        width={800}
        height={500}
        alt="content" />
       <CustomCard.Body className='px-2 '>
          <h3 className="tw-tracking-widest tw-p-0  tw-text-indigo-500 tw-text-xs tw-font-medium tw-title-font">Date: {formattedDate}</h3>
                      <h2 className="tw-text-lg tw-text-gray-200 tw-font-medium tw-title-font">{blog.title}</h2>
                   
        </CustomCard.Body>
      </CustomCard>
        </Link>
                </div>
              );
            })
          }
          </div>
        </div>


        </div>
      {spinn && <Spinner />}
    </div>
  );
}

  
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