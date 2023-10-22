import React from 'react'
import { Outlet } from 'react-router-dom'
import '../css/inicial.css'

export default function Inicial() {
  function forceLandscape() {
    if (window.orientation === 0 || window.orientation === 180) {
      alert('Para melhorar sua experiencia, por favor, gire seu dispositivo para o modo paisagem.');
    }
  }
  window.addEventListener('orientationchange', forceLandscape);
  forceLandscape();
  return (
    <div className='wallpaper'>
      <Outlet></Outlet>
    </div>
  )
}
