import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../css/portifolio.css'
import Efeitoletrado from '../components/Efeitoletrado'

export default function Experiencias() {
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
  console.log('essa pagina tem uns b.o ainda')
  return (
    <div className='box coluna'>
      <div className='topPartCria'>
        <p className='nome'>Experiências</p>
      </div>
      <div className='bottomPartExp'>
        {
          media > 768 && (
            <div>
              <Efeitoletrado>
                <p className='description indent'>
                  Como programador profissional, conhecimento sólido em React, incluindo mas não limitado em ciclo de vida, hooks e routers. Sólido em HTML5, CSS3 e JavaScript, básico em jQuery, C# e .NET. Além disso, possui uma experiência ao utilizar pacote de design e edição de Adobe.
                </p>
              </Efeitoletrado>
              <ul className='exibirImgComun'>
                <ol className='itemIconExp'>
                  <img src={require('../img/react.svg').default} alt='react' className='iconExp' />
                </ol>
                <ol className='itemIconExp'>
                  <img src={require('../img/html.svg').default} alt='html' className='iconExp' />
                </ol>
                <ol className='itemIconExp'>
                  <img src={require('../img/css.svg').default} alt='css' className='iconExp' />
                </ol>
                <ol className='itemIconExp'>
                  <img src={require('../img/javascript.svg').default} alt='js' className='iconExp' />
                </ol>
                <ol className='itemIconExp'>
                  <img src={require('../img/jquery.svg').default} alt='jquery' className='iconExp' />
                </ol>
                <ol className='itemIconExp'>
                  <img src={require('../img/csharp.svg').default} alt='csharp' className='iconExp' />
                </ol>
              </ul>
            </div>
          )
        }
        {
          media <= 768 && (
            <>
              <Swiper spaceBetween={90} slidesPerView={1} direction='horizontal'>
                <SwiperSlide>
                  <div className='itemImg'>
                    <img src={require('../img/react.svg').default} alt='react' className='iconExp' />
                    <p className='coDescription justyCenter'>
                      React
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='itemImg'>
                    <img src={require('../img/html.svg').default} alt='html' className='iconExp' />
                    <p className='coDescription justyCenter'>
                      HTML5
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='itemImg'>
                    <img src={require('../img/css.svg').default} alt='css' className='iconExp' />
                    <p className='coDescription justyCenter'>
                      CSS3
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='itemImg'>
                    <img src={require('../img/javascript.svg').default} alt='js' className='iconExp' />
                    <p className='coDescription justyCenter'>
                      JavaScript
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='itemImg'>
                    <img src={require('../img/jquery.svg').default} alt='jquery' className='iconExp' />
                    <p className='coDescription justyCenter'>
                      jQuery
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='itemImg'>
                    <img src={require('../img/csharp.svg').default} alt='csharp' className='iconExp' />
                    <p className='coDescription justyCenter'>
                      C#
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          )
        }
      </div>
    </div>
  )
}
