import React from 'react'
import { HashRouter } from 'react-router-dom'
import Rotas from './rotas'
import Navbar from '../components/Navbar'
export default function Router() {
  
  return (
    <HashRouter>
      <Navbar></Navbar>
      <Rotas></Rotas>
    </HashRouter>
  )
}
