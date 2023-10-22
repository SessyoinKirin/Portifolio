import React from 'react'
import '../css/portifolio.css'

export default function Criatividade() {
  return (
    <div className='box coluna'>
      <div className='topPartCria'>
        <p className='description indent'>Como um programador, minha criatividade é infinita.<br />
          Confira meus projetos durante vida universitária abaixo.
        </p>
      </div>
      <div className='bottomPartCria'>
        <ul className='exibirImg'>
          <ol className='itemImg'>
            <img src={require('../img/3dMaxVideo1.png')} alt='3dMax' className='imgCria' onClick={()=>{
              window.open('https://www.instagram.com/p/CuZmAoRJ45g/', '_blank')
            }}/>
            <p className='coDescription justyCenter'>Modelagem 3D Max</p>
          </ol>
          <ol className='itemImg'>
            <img src={require('../img/3dMaxPremiere.png')} alt='3dMaxPR' className='imgCria' onClick={()=>{
              window.open('https://www.instagram.com/p/CtsR7B_uOiP/', '_blank')
            }}/>
            <p className='coDescription justyCenter'>Animação 3D Max</p>
          </ol>
          <ol className='itemImg'>
            <img src={require('../img/propagandaPI.png')} alt='Propaganda' className='imgCria' onClick={()=>{
              window.open('https://www.instagram.com/p/ClYoOKnDrFW/', '_blank')
            }}/>
            <p className='coDescription justyCenter'>Propaganda de Projeto</p>
          </ol>
        </ul>
      </div>
    </div>
  )
}
