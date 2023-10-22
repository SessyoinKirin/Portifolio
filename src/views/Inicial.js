import React from 'react'
import { Outlet } from 'react-router-dom'
import '../css/inicial.css'

export default function Inicial() {
  return (
    <div className='wallpaper'>
      <Outlet></Outlet>
    </div>
  )
}
