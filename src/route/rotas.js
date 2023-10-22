import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import lazyload from '../components/lazyload'
export default function Rotas() {
  return (
    <div>
      <Routes>
        <Route path='/Inicial' element={lazyload('Inicial')}>
          <Route path='' element={<Navigate to={'/Inicial/Portifolio'}/>}/>
          <Route path='Portifolio' element={lazyload('Portifolio')} />
          <Route path='Criatividade' element={lazyload('Criatividade')} />
          <Route path='Comunication' element={lazyload('Comunication')}/>
          <Route path='Projetos' element={lazyload('Projetos')}/>
          <Route path='Experiencias' element={lazyload('Experiencias')}/>
        </Route>
        <Route path='/' element={<Navigate to={'/Inicial'} />} />
        <Route path='*' element={lazyload('NotFound')} />
      </Routes>
    </div>
  )
}
