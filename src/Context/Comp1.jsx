import React, { useState } from 'react'
import { createContext } from 'react'
import Comp2 from './Comp2'
export const Countcontext=createContext() 
export const Comp1 = () => {

 const[count,setcount]=useState(0)
  return (
    <Countcontext.Provider value={{count,setcount}}>
     <h1>{count}</h1>
     <Comp2/>
    </Countcontext.Provider>
  )
}

