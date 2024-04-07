import React, { useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
import Rotas from './rotas'
import Navbar from '../components/Navbar'
import Animation from '../components/Animation'

export default function Router() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Animation />}
      {
        !isLoading && (
          <HashRouter>
            <Navbar></Navbar>
            <Rotas></Rotas>
          </HashRouter>
        )
      }
      {/* <Animation /> */}
    </>
  )
}
