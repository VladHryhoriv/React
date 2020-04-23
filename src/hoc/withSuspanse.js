import React, { Suspense } from 'react'
import Preloader from '../Components/Preloader/Preload';

export const withSuspense = (Component,loading=false)=>{
    return (props)=>{
        return <Suspense fallback={loading?<Preloader/>:<></>}>
                <Component {...props}/>
            </Suspense>
    }
}