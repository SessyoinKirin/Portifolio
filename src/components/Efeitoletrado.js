import React, {useState, useEffect} from 'react'
import '../css/portifolio.css'
export default function Efeitoletrado({children}) {
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 1000); 
  
      return () => clearTimeout(timeout);
    }, []);

const letras = children.props.children.toString().split('')
  return (
    <div>
        {letras.map((letter, index) => (
        <span key={index} className={`fade-in-letter ${isVisible ? 'visible' : ''} description indent`}>{letter}</span>
      ))}
    </div>
  )
}
