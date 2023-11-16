import '@/styles/globals.css'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import { useState } from 'react'
import Spinner from './Spinner'


export default function App({ Component, pageProps }) {
  const [spinner, setspinner] = useState(false)
  


  return <>

  {!spinner&&<><Navbar spinner={spinner} setspinner={setspinner}/>
  <Component {...pageProps} spinner={spinner} setspinner={setspinner}/></>}
  {spinner&&<Spinner/>}
  </> 
}
