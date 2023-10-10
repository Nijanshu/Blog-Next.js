// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';  //to read individual files

export default async function handler(req, res) {
  
  let data=await fs.promises.readdir('blogdata');
  let allBlogs = [];
  let myfile;
  for (let i=0; i<data.length; i++) {
    const item = data[i];
    console.log(item);
    myfile= await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs)
  
  
  
  //This will not set blog content as we didn't give enough to program for desired output
  // fs.readdir("blogdata", (err, data) => {  // Case insensitive--> Reads a directory and shows the files in it as data
  //   console.log(data)
  //   let allBlogs=[];
  //   data.forEach((item)=>{
  //     console.log(item)
  //     fs.readFile(('blogdata/'+item),(d)=>{
  //       allBlogs.push(d)
  //     })
  //   })
  //   res.status(200).json(allBlogs)
  // })
}
