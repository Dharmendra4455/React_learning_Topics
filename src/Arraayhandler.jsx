import { useState } from "react";
function Arrayhandler(){
    const[fruit,setfruit]=useState(["Apple","Mango","Grapes"]);
    function fruithandler(){
        const newfruit=document.querySelector("#inputfruit").value;
        document.querySelector("#inputfruit").value="";
        let existchecker=0;
        if(newfruit.length>0){
           for(let i in fruit){
           if(fruit[i]===newfruit){
           // console.log("Already Exist!!")
            document.querySelector(".existhandler").style.display="block"
            existchecker=1;
            break;
           }
          }
          if(existchecker==0)
            setfruit(f=>[...f,newfruit])
        }

    }
    function removeitem(i){
        setfruit(fruit.filter((fruit,index)=>index!==i))
        //console.log(fruit.filter((fruit,index)=>index!==i))
    }
    function existremover(){
        document.querySelector(".existhandler").style.display="none"
    }
    return(<>
    <h1>List of fruits</h1>
    {fruit.map((fruit,index)=><li style={{
        border:"2px solid black",display:"block",width:"200px",
        padding:"5px",margin:"2px",borderRadius:"4px"
    }} key={index} onClick={()=>removeitem(index)}><b>{fruit}</b></li>)}
   
    <input onChange={existremover} type="text" id="inputfruit" placeholder="Enter fruit Name"/>
    <button onClick={fruithandler}>Add Fruit</button>
    <h5  style={{display:"none"}} className="existhandler">Fruit name already exist!!</h5>
    </>)

}
export default Arrayhandler;