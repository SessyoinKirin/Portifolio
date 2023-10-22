import React from 'react'
import '../css/portifolio.css'
export default function Experiencias() {
  return (
    <div className='box coluna'>
      <div className='topPartCria'>
        <p className='nome'>Experiências</p>
      </div>
      <div className='bottomPartExp'>
        <p className='description indent'>
            Como programador profissional, conhecimento sólido em React, incluindo mas não limitado em ciclo de vida, hooks e routers. Sólido em HTML5, CSS3 e JavaScript, básico em jQuery, C# e .NET.
        </p>
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
    </div>
  )
}
