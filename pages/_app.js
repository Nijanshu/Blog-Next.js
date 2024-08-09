import '@/styles/globals.css'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import { useState } from 'react'
import Spinner from './Spinner'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import { useEffect } from 'react'





export default function App({ Component, pageProps }) {
  const [spinner, setspinner] = useState(false)
  
  useEffect(() => {
    AOS.init();
  }, []); // Empty dependency array ensures this runs once after component mounts


  return <>

  {!spinner&&<><Navbar spinner={spinner} setspinner={setspinner}/>
  <Component {...pageProps} spinner={spinner} setspinner={setspinner}/></>}
  {spinner&&<Spinner/>}
  </> 
}
