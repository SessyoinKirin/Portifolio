import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../css/portifolio.css'

export default function Criatividade() {
  const [media, setMedia] = useState(window.innerWidth)
  // const [swiperVisible, setSwiperVisible] = useState(false)
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
        <p className='description indent'>Como um programador, minha criatividade é infinita.<br />
          Confira meus projetos durante vida universitária abaixo.
        </p>
      </div>
      <div className='bottomPartCria'>
        {
          media > 768 && (
            <div className='exibirImg'>
              <div className='itemImg'>
                <img src={require('../img/3dMaxVideo1.png')} alt='3dMax' className='imgCria' onClick={() => {
                  window.open('https://www.instagram.com/p/CuZmAoRJ45g/', '_blank')
                }} />
                <p className='coDescription justyCenter'>Modelagem 3D Max</p>
              </div>
              <div className='itemImg'>
                <img src={require('../img/3dMaxPremiere.png')} alt='3dMaxPR' className='imgCria' onClick={() => {
                  window.open('https://www.instagram.com/p/CtsR7B_uOiP/', '_blank')
                }} />
                <p className='coDescription justyCenter'>Animação 3D Max</p>
              </div>
              <div className='itemImg'>
                <img src={require('../img/propagandaPI.png')} alt='Propaganda' className='imgCria' onClick={() => {
                  window.open('https://www.instagram.com/p/ClYoOKnDrFW/', '_blank')
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
