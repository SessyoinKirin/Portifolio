import React from 'react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  return (
    <div className='navbar'>
      <ul>
        <NavLink to='/Inicial/Experiencias' className={({ isActive }) => isActive ? 'tabbarActive' : ''}>Experiencias</NavLink>
        <NavLink to='/Inicial/Projetos' className={({ isActive }) => isActive ? 'tabbarActive' : ''}>Projetos</NavLink>
        <NavLink to='/Inicial/Portifolio' className={({ isActive }) => isActive ? 'tabbarActive mudaIcon' : ''}>
          <img src={require('../img/home.svg').default} className='homeImg' alt='home' />
        </NavLink>
        <NavLink to='/Inicial/Criatividade' className={({ isActive }) => isActive ? 'tabbarActive' : ''}>Criatividade</NavLink>
        <NavLink to='/Inicial/Comunication' className={({ isActive }) => isActive ? 'tabbarActive' : ''}>Comunicação</NavLink>
      </ul>
    </div>
  )
}
