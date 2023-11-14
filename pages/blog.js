import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';


const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [clk, setClk] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const change = (e) => {
    setSearch(e.target.value);
  };

  const submit = () => {
    setBlogs(props.allBlogs.filter((blog) => blog.description.includes(search)));
    setClk(true);
  };

  const loadMore = async () => {
    setPageNumber(pageNumber + 1);
    const response = await fetch(`https://newwwbackkk.onrender.com/api/notes/fetchnotes?page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjYwZjA1NzBmMjliNjYxZDRjNWI2In0sImlhdCI6MTY5NzAyOTMxN30.TR-s19HixAFqeaJFYYnCM3zyAiXtshcneHNqpyVRTb0',
      },
    });

    const moreBlogs = await response.json();
    setBlogs((prevBlogs) => [...prevBlogs, ...moreBlogs]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;

      if (isBottom) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageNumber]);

  useEffect(() => {
    // Simulate a delay to show the spinner for demonstration purposes
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <div>
    <Head>
        <title>Blogs</title>
        <meta name="description" content="inBlog Blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/inBlog.png" />
      </Head>
    <div>
      <div className='m-auto flex md:w-[50%] mt-2'>
        <input type="text" name="" onChange={change} placeholder='search here' className='bg-slate-50 border rounded-3xl w-[80%] px-3 py-2' value={search} id="" />
        <button type='button' className='bg-orange-600 mx-2 p-2 rounded-3xl ' onClick={submit}>Submit</button>
      </div>
      {clk?<h1 className='text-center text-violet-500 text-4xl mt-8 font-bold font-serif'>Search Results: {blogs.length}</h1>:
      <h1 className='text-center text-violet-500 text-4xl mt-8 font-bold font-serif'>Latest Blogs: {blogs.length}</h1> }
      <section className="text-gray-300 bg-black body-font">
  <div className="container px-10 py-10 mx-auto">
<div className="flex flex-wrap -m-4">

      {!loading&&blogs.map((blog) => {
  const dat = new Date(blog.date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    
  };
  const formattedDate = dat.toLocaleDateString('en-US', options);

  return (
 
      <div className="xl:w-1/4 md:w-1/2 p-4" key={blog._id}>
          <Link href={`/blogpost/${blog._id}`}>
        <div className="bg-gray-700 p-6 rounded-lg">
        <Image
  className="rounded w-full object-cover object-center mb-6"
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9t03u7MhtmOHnUbiqcNQ2vmP0ngAh71ubw&usqp=CAU"
  width={200}
  height={200}
  loading='lazy'
  alt="content"
/>          
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Date: {formattedDate}</h3>
          <h2 className="text-lg text-gray-200 font-medium title-font mb-4">{blog.title}</h2>
          <p className="leading-relaxed text-base">
          <a className='text-[#3acaef]' href={`/blogpost/${blog._id}`}>Read Full Article</a>            </p>
        </div>
          </Link>
      </div>
    
     
  );
})}


    </div>
    </div>
    </section>
    </div>
    <button onClick={loadMore}>Load More</button>
    </div>
  )
}


// export async function getserversideprops(context) {   //Static Site generation
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


export async function getStaticProps(context) {
  const pageNumber = 1; // Set the initial page number
  const response = await fetch(`https://newwwbackkk.onrender.com/api/notes/fetchnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjYwZjA1NzBmMjliNjYxZDRjNWI2In0sImlhdCI6MTY5NzAyOTMxN30.TR-s19HixAFqeaJFYYnCM3zyAiXtshcneHNqpyVRTb0',
    },
   
  });

  const allBlogs = await response.json();
  allBlogs.reverse();

  return {
    props: { allBlogs },
  };
}

export default Blog
