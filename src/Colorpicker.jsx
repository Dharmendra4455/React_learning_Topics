import { useState } from "react";
function Colorpicker(){
    const[colors,setcolor]=useState("#ffffffff")
    const Colorhandler=(e)=>{
      setcolor(e.target.value)
      /*const str=e.target.value;
      const trimstr=str.slice(1);
      const dec=parseInt(trimstr,16)
      console.log(dec/1000000)*/
    }
    const boxstyle={
        width:"12em",
        height:"10em",
        border:"2px solid red",
        backgroundColor: colors,
        borderRadius:"1",
    }
    return(<>
    <div style={boxstyle}>
    <h3 style={{textAlign:"center",marginTop:"50%"}}>{colors}</h3>
    </div>
    <h4 style={{display:"inline"}}>Select a Color:</h4>
    <input style={{marginTop:"5px",marginLeft:"5px"}} onChange={Colorhandler} type="color"/>
   
    </>)
}
export default Colorpicker;