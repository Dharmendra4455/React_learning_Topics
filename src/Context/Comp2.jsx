import React, { useContext } from 'react'
import { Countcontext } from './Comp1'

const Comp2 = () => {
    const value=useContext(Countcontext)
  return (<>
   
  <button onClick={()=>value.setcount(value.count+1)} style={{padding:"25px",fontSize:"30px"}}>Incr</button>
  </>
  )
}

export default Comp2