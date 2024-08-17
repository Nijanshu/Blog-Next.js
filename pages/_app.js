import '@/styles/globals.css'
import Navbar from '@/Components/Navbar'
// import  "bootstrap/dist/css/bootstrap.min.css"
import '@/styles/globals.css'
import { useState } from 'react'
import Spinner from './Spinner'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { useEffect } from 'react'





export default function App({ Component, pageProps }) {
  const [spinner, setspinner] = useState(false)

  const load = () => {
    // if (setspinner) { // if the setspinner function exists. 
       setspinner(true);

      console.log(spinner)
      // // Assuming you want to keep the spinner for 2 seconds as in your original code
      setTimeout(() => {
        setspinner(false);
      },3000);
    // }
  };
  
  useEffect(() => {
    AOS.init();
  }, []); // Empty dependency array ensures this runs once after component mounts


  return <div style={{background:'black'}} >

  {!spinner&&<><Navbar spinner={spinner} load={load} setspinner={setspinner}/>
  <Component {...pageProps} spinner={spinner} load={load} setspinner={setspinner}/></>}
  {spinner&&<Spinner/>}
  </div> 
}
