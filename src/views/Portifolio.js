import React from 'react'
import '../css/portifolio.css'

export default function Portifolio() {
  return (
    <div className='box'>
      <div className='leftPart'>
        <img src={require('../img/perfil.jpeg')} className='perfil' alt='perfil' />
        <p className='coDescription'>Programador Front-End</p>
      </div>
      <div className='rightPart'>
        <div className='topPart'>
          <p className='nome'>Chen</p>
        </div>
        <div className='bottomPart'>
          <p className='description'>
            Suor, não importa.<br/>
            É a pilha da minha experiência;<br/>
            Marasmo, não importa.<br/>
            É a minha preparação para a transcendência;<br/>
            Fracasso, não importa.<br/>
            É a razão do meu sucesso!<br/>
            <br/>
            Meu lema é:<br/>
            Você está contratado.
          </p>
        </div>
      </div>
    </div>
  )
}
