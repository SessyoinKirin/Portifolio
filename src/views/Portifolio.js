import React, { useState, useEffect, useRef } from 'react'
import '../css/portifolio.css'

export default function Portifolio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const darSom = () => {
    if (isPlaying) {
      audioRef.current.pause();

    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current
    audio.loop = true
  }, [])

  return (
    <div className='box'>
      <div className='leftPart'>
        {
          isPlaying ? <img src={require('../img/perfil.jpeg')} className='perfil' alt='perfil' onClick={darSom} /> : <img src={require('../img/perfil2.jpg')} className='perfil' alt='perfil' onClick={darSom} />
        }
        <audio
          ref={audioRef}
          src={require('../audio/Cthulhu.mp3')}
        />
        <p className='coDescription'>Programador Front-End</p>
      </div>
      <div className='rightPart'>
        <div className='topPart'>
          <p className='nome'>Chen</p>
        </div>
        <div className='bottomPart'>
          <p className={`fade-in-letter ${isVisible ? 'visible' : ''} description`}>
            Suor, não importa.<br />
            É a pilha da minha experiência;<br />
            Marasmo, não importa.<br />
            É a minha preparação para a transcendência;<br />
            Fracasso, não importa.<br />
            É a razão do meu sucesso!<br />
            <br />
            Meu lema é:<br />
            Você está contratado.
          </p>
        </div>
      </div>
    </div>
  )
}
