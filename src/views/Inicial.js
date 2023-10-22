import React from 'react'
import { Outlet } from 'react-router-dom'
import '../css/inicial.css'

export default function Inicial() {
  // function forceLandscape() {
  //   if (window.orientation === 0 || window.orientation === 180) {
  //     // Orientação retrato
  //     alert('Por favor, gire seu dispositivo para o modo paisagem.');
  //     // Pode redirecionar para uma página que exija paisagem aqui
  //   }
  // }
  // window.addEventListener('orientationchange', forceLandscape);

  // // Execute a função inicialmente para verificar a orientação ao carregar a página
  // forceLandscape();
  return (
    <div className='wallpaper'>
      <Outlet></Outlet>
    </div>
  )
}
