import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'


const Blog = (props) => {

  const [blogs, setblogs] = useState(props.allBlogs)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    // Simulate a delay to show the spinner for demonstration purposes
    setTimeout(() => {
      setloading(false);
    }, 2000); // Adjust the delay as needed

    // You can keep the actual data fetching code here
    // Replace this simulated setTimeout with your actual data fetching code
  }, []);
  
  return (
    <>
    <Head>
        <title>Blogs</title>
        <meta name="description" content="inBlog Blogs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/inBlog.png" />
      </Head>
    <div>
      <h1 className='text-center text-violet-500 text-4xl mt-8 font-bold font-serif'>Latest Blogs: {blogs.length}</h1>
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

  return (<>
 
      <div className="xl:w-1/4 md:w-1/2 p-4">
          <Link href={`/blogpost/${blog._id}`}>
        <div className="bg-gray-700 p-6 rounded-lg">
          <img className=" rounded w-full object-cover object-center mb-6" src="/phone.webp" width={500} height={100} alt="content"/>
          
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Date: {formattedDate}</h3>
          <h2 className="text-lg text-gray-200 font-medium title-font mb-4">{blog.title}</h2>
          <p className="leading-relaxed text-base">
          <a className='text-[#3acaef]' href={`/blogpost/${blog._id}`}>Read Full Article</a>            </p>
        </div>
          </Link>
      </div>
    
      </>
      
  );
})}


    </div>
    </div>
    </section>
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
