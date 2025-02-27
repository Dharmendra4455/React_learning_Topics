import {useState} from 'react';
function Use_state(){
    const [count,sum]=useState(0);
    const Increment=()=>{
    sum(count+1);
   }
   const Decrement=()=>{
    sum(count-1);
    
   }
   const Reset=()=>{
    sum(0);
   }
   
    return(
        <>
       <h1 style={{marginLeft:"5em",color:"Blue"}}>{count}</h1>
        <button style={{backgroundColor:"red",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",marginLeft:"5px",borderRadius:"5px",fontSize:"17px"}} onClick={Decrement}>Decrement</button>
        <button style={{backgroundColor:"lightBlue",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",marginLeft:"5px",borderRadius:"5px",fontSize:"17px"}} onClick={Reset}>Reset</button>
        <button style={{backgroundColor:"green",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",marginLeft:"5px",borderRadius:"5px",fontSize:"17px"}} onClick={Increment}>Increment</button>
        </>
       
    )
}
export default Use_state;