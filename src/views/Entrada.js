import React from 'react'
import '../css/entrada.css'

export default function Entrada() {
  document.addEventListener('DOMContentLoaded', function(){
    const circulo = document.querySelector('.circulo')
    circulo.addEventListener('mouseenter',()=>{
      circulo.style.transformOrigin = 'center center';
      circulo.style.transform = 'scale(1.2) rotate(180deg)'
    })
    circulo.addEventListener('mouseleave',()=>{
      circulo.style.transformOrigin = 'center center';
      circulo.style.transform = 'scale(1) rotate(0deg)';
    })
  })

  return (
    <div className='entrada-container'>
      <div className='halfWidth leftArea'></div>
      <div className='halfWidth rightArea'></div>
      <div className='circulo'>
        <img src={require('../img/perfil.jpeg')} alt='perfil' className='imagem'/>
      </div>
    </div>
  )
}
