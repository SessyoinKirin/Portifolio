import React, { useEffect, useState } from 'react';
import '../css/portifolio.css';

export default function Projetos() {
  const [media, setMedia] = useState(window.innerWidth);
  const [element1Visible, setElement1Visible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setMedia(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleElements = () => {
    setElement1Visible(!element1Visible);
  };

  return (
    <div className='box coluna'>
      <div className='topPartProj'>
        <p className='description indent'>
          Nos projetos de TCC, sou responsável em Front-End, trabalhar com estilização da página e escrever as principais funções de hooks em React Native. Confira os projetos abaixo, ao clicá-los será redirecionado para seu repositório em Github.
        </p>
      </div>
      <div className='bottomPartCria scroll'>
        <ul className='exibirImgComun scrollElement'>
          <ol className={`itemProj ${element1Visible ? 'element1' : 'hidden'}`}>
            <img
              src={require('../img/TCCHTML.png')}
              alt='HTML'
              className='imgProj telaGrande'
              onClick={() => {
                window.open('https://github.com/SessyoinKirin/ProjetoInterdisciplinar', '_blank');
              }}
            />
            <p className='coDescription justyCenter'>
              HTML/CSS/JS
            </p>
          </ol>
          <ol className={`itemProj ${!element1Visible ? 'element2' : 'hidden'}`}>
            <img
              src={require('../img/TCCReactNative.png')}
              alt='RN'
              className='imgProj'
              onClick={() => {
                window.open('https://github.com/SessyoinKirin/Trabalho-de-Conclusao', '_blank');
              }}
            />
            <p className='coDescription justyCenter'>
              React Native
            </p>
          </ol>
        </ul>
        {media <= 768 && (
          <div className='mobile'>
            <img
              src={require('../img/anterior.svg').default}
              alt='ant'
              className='seta'
              onClick={toggleElements}
            />
            <img
              src={require('../img/next.svg').default}
              alt='next'
              className='seta'
              onClick={toggleElements}
            />
          </div>
        )}
      </div>
    </div>
  );
}
