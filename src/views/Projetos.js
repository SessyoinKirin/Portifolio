import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/portifolio.css';

export default function Projetos() {
  const [media, setMedia] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setMedia(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='box coluna'>
      <div className='topPartProj'>
        <p className='description indent'>
          Nos projetos de TCC, sou responsável em Front-End, trabalhar com estilização da página e escrever as principais funções de hooks em React Native. Confira os projetos abaixo, ao clicá-los será redirecionado para seu repositório em Github.
        </p>
      </div>
      <div className='bottomPartCria'>
        {
          media > 768 && (
            <div className='exibirImgComun'>
              <div className='itemProj'>
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
              </div>
              <div className='itemProj'>
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
              </div>
            </div>
          )
        }
        {media <= 768 && (
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
            <div className='itemProj'>
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
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='itemProj'>
                <img
                  src={require('../img/TCCReactNative.png')}
                  alt='RN'
                  className='imgProj telaMenor'
                  onClick={() => {
                    window.open('https://github.com/SessyoinKirin/Trabalho-de-Conclusao', '_blank');
                  }}
                />
                <p className='coDescription justyCenter'>
                  React Native
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </div>
  );
}
