import React from 'react'
import '../css/portifolio.css'
export default function Comunication() {
    return (
        <div className='box coluna'>
            <div className='topPartCria'>
                <p className='nome'>Comunicação</p>
            </div>
            <div className='bottomPartComun'>
                <p className='description indent'>
                    Qualquer críticas e sugestões são aceitos e bem-vindos no meu LinkedIn, confira meus demais artes em Instagram.
                </p>
                <ul className='exibirImgComun'>
                    <ol className='itemIcon'>
                        <img src={require('../img/linkedin.svg').default} alt='linkedin' className='iconComun' onClick={()=>{
                            window.open('https://www.linkedin.com/in/haohui-chen-611976225/','_blank')
                        }}/>
                    </ol>
                    <ol className='itemIcon'>
                        <img src={require('../img/github.svg').default} alt='git' className='iconComun' onClick={()=>{
                            window.open('https://github.com/SessyoinKirin', '_blank')
                        }}/>
                    </ol>
                    <ol className='itemIcon'>
                        <img src={require('../img/instagram.svg').default} alt='insta' className='iconComun' onClick={()=>{
                            window.open('https://www.instagram.com/kim_e_ra/', '_blank')
                        }}/>
                    </ol>
                </ul>
            </div>
        </div>
    )
}
