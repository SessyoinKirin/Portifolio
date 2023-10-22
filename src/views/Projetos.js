import React from 'react'
import '../css/portifolio.css'

export default function Projetos() {
  return (
    <div className='box coluna'>
      <div className='topPartProj'>
        <p className='description indent'>
          Nos projetos de TCC, sou responsável em Front-End, trabalhar com estilização da página e escrever as principais funções de hooks em React Native. Confira os projetos abaixo, ao clicá-los será redirecionado para seu repositório em Github.
        </p>
      </div>
      <div className='bottomPartCria'>
        <ul className='exibirImgComun'>
          <ol className='itemProj'>
            <img src={require('../img/TCCHTML.png')} alt='HTML' className='imgProj' onClick={() => {
              window.open('https://github.com/SessyoinKirin/ProjetoInterdisciplinar', '_blank')
            }} />
            <p className='coDescription justyCenter'>
              HTML/CSS/JS
            </p>
          </ol>
          <ol className='itemProj'>
            <img src={require('../img/TCCReactNative.png')} alt='RN' className='imgProj' onClick={() => {
              window.open('https://github.com/SessyoinKirin/Trabalho-de-Conclusao', '_blank')
            }} />
            <p className='coDescription justyCenter'>
              React Native
            </p>
          </ol>
        </ul>
      </div>
    </div>
  )
}
