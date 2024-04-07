import React from 'react'
import "../css/animation.css"

export default function Animation() {

    const numeros = Array.from({ length: 20 }, (_, index) => index + 1);
    return (
        <section>
            <div className='loader'>
                {numeros.map((numero) => (
                    <span key={numero} style={{ '--i': numero }}>
                    </span>
                ))}
            </div>
        </section>
    )
}
