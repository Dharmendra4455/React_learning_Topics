import { useState} from "react";
function Object(){
    const[car,setcar]=useState({year:2025,
                               make:"Ford",
                               model:"Mustang"})
     const caryearhandler=(e)=>{
        setcar(c=>({...c,year:e.target.value}))
     }
     const carmakehandler=(e)=>{
        setcar(c=>({...c,make:e.target.value}))
     }
     const carmodelhandler=(e)=>{
        setcar(c=>({...c,model:e.target.value}))
     }
    return(
        <>
        <h3>My Favourite Car is:{car.year} {car.make} {car.model}</h3>
        <input onChange={caryearhandler}  value={car.year} style={{padding:"5px",margin:"5px"}} type="number" placeholder="year"/><br/>
        <input onChange={carmakehandler}  value={car.make} style={{padding:"5px",margin:"5px"}} type="text" placeholder="Make"/><br/>
        <input onChange={carmodelhandler} value={car.model} style={{padding:"5px",margin:"5px"}} type="text" placeholder="Model"/>
        </>
    )
}
export default Object;