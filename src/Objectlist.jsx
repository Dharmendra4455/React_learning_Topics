import { useState } from "react";
function Objectlist()
{
    const [phones,setphones]=useState([])
    const [year,setyear]=useState(new Date().getFullYear());
    const [name,setname]=useState("")
    const [modelname,setmodelname]=useState("")
    const [color,setcolor]=useState("")
    const yearhandler=(e)=>{
        setyear(e.target.value)
    }
    const namehandler=(e)=>{
        setname(e.target.value)
    }
    const modelhandler=(e)=>{
        setmodelname(e.target.value)
    }
    const colorhandler=(e)=>{
        setcolor(e.target.value)
    }
    const additem=()=>{
        var newphones={        /* making object of collected data fron input box
                                      with different name(key and canbe same) and assign the input value 
                                      and this will used to represent the list of all data(name,year,model...) */
              y:year,
              n:name,
              m:modelname,
              c:color}
              console.log("Hello")
        setphones(p=>[...p,newphones]); //new list(array) of data added into top usestate using spread(...)operator 
        setyear(new Date().getFullYear()); 
        setname("");                      //making it empty input box after insert the list
        setmodelname("");
        setcolor("");
        }
        const itemremover=(i)=>{
            setphones(phones.filter((p,index)=>
                index!==i
            ))
        }
    return(<>
    <h2>List of Phones</h2>
    <ol>
        {
            phones.map((phones,index)=>
                <li key={index} onClick={()=>{itemremover(index)}}>{phones.y} {phones.n} {phones.m} {phones.c}</li>
            )
        }
    </ol>
    <input onChange={yearhandler} type="number" name="year" value={year}/><br/>
    <input onChange={namehandler}  value={name} type="text" name="Phone_Name"placeholder="phone name"/><br/>
    <input onChange={modelhandler} value={modelname} type="text" name="Model" placeholder="model"/><br/>
    <input onChange={colorhandler} value={color} type="text" name="color" placeholder="color"/><br/>
    <button type="submit" onClick={additem} >Add</button>
    </>)
}
export default Objectlist;