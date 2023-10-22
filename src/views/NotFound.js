import React, { useState, useEffect } from 'react'
import '../css/inicial.css'
import '../css/portifolio.css'

export default function NotFound() {
    const hideNavbar = () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.display = 'none';
        }
    };
    hideNavbar();

    const [count, setCount] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
            } else {
                clearInterval(timer); 
                window.location.href='/Inicial'
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [count]);
    return (
        <div className='wallpaper notfound'>
            <h2>Opa! Página não encontrada.</h2>
            <h1>404</h1>
            <p className='description'>Em <span className='spanMaior'>{count}</span> segundos você será redirecionado para página inicial.</p>
        </div>
    )
}
