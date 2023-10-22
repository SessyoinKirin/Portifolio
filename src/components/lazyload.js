import React from 'react'
import Carregando from '../views/Carregando'

const lazyload=(path)=>{
    const Comp = React.lazy(()=>import(`../views/${path}`))
    return (
        <React.Suspense fallback={<Carregando/>}>
            <Comp/>
        </React.Suspense>
    )
}

export default lazyload