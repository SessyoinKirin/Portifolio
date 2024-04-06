import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/portifolio.css'
import Efeitoletrado from '../components/Efeitoletrado';

export default function Criatividade() {
  const [media, setMedia] = useState(window.innerWidth)
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
      <div className='topPartCria'>
        <Efeitoletrado>
        <p className='description indent'>
          Confira meus projetos durante vida universitária abaixo.
        </p>
        </Efeitoletrado>
      </div>
      <div className='bottomPartCria'>
        {
          media > 768 && (
            <div className='exibirImg'>
              <div className='itemImg'>
                <img src={require('../img/3dMaxVideo1.png')} alt='3dMax' className='imgCria' onClick={() => {
                  window.open('https://www.instagram.com/reel/C2uoI17Oq2b/?utm_source=ig_web_copy_link', '_blank')
                }} />
                <p className='coDescription justyCenter'>Modelagem 3D Max</p>
              </div>
              <div className='itemImg'>
                <img src={require('../img/3dMaxPremiere.png')} alt='3dMaxPR' className='imgCria' onClick={() => {
                  window.open('https://www.instagram.com/reel/C2uojHVO5h2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', '_blank')
                }} />
                <p className='coDescription justyCenter'>Animação 3D Max</p>
              </div>
              <div className='itemImg'>
                <img src={require('../img/propagandaPI.png')} alt='Propaganda' className='imgCria' onClick={() => {
                  window.open('https://www.instagram.com/reel/C2uoniguG4a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', '_blank')
                }} />
                <p className='coDescription justyCenter'>Propaganda de Projeto</p>
              </div>
            </div>
          )
        }
        {
          media <= 768 && (
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
            >
              <SwiperSlide>
                <div className='itemImg'>
                  <img src={require('../img/3dMaxVideo1.png')} alt='3dMax' className='imgCria' onClick={() => {
                    window.open('https://www.instagram.com/p/CuZmAoRJ45g/', '_blank')
                  }} />
                  <p className='coDescription justyCenter'>Modelagem 3D Max</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='itemImg'>
                <img src={require('../img/3dMaxPremiere.png')} alt='3dMaxPR' className='imgCria' onClick={() => {
                  window.open('https://www.instagram.com/p/CtsR7B_uOiP/', '_blank')
                }} />
                <p className='coDescription justyCenter'>Animação 3D Max</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='itemImg'>
                <img src={require('../img/propagandaPI.png')} alt='Propaganda' className='imgCria' onClick={() => {
                  window.open('https://www.instagram.com/p/ClYoOKnDrFW/', '_blank')
                }} />
                <p className='coDescription justyCenter'>Propaganda de Projeto</p>
              </div>
              </SwiperSlide>
            </Swiper>
          )
        }
      </div>
    </div>
  )
}
