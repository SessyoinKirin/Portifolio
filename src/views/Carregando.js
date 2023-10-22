import React, { useEffect, useState } from 'react'
import '../css/portifolio.css'
export default function Carregando() {
    const [dotsVisible, setDotsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setDotsVisible((prevDotsVisible) => !prevDotsVisible);
        }, 1000);
        
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div className='wallpaper'>
            <div className='box centroAbs'>
                <p className='nome'>Carregando..{dotsVisible ? '.' : ' '}</p>
            </div>
        </div>
    )
}
