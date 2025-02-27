import {useState} from 'react';
function form(){
    const[name,setname]=useState("");
    const[dob,setdob]=useState("");
    const[comment,setcomment]=useState("")
    const[state,setstate]=useState("")
    const[gender,setgender]=useState("")

    const namehandler=(event)=>{
        setname(event.target.value)
    }
    const dobhandler=(event)=>{
        
        setdob(event.target.value)
    }
    const texthandler=(event)=>{
        setcomment(event.target.value)
    }
    const statehandler=(event)=>{
        setstate(event.target.value)
    }
    const radiohandler=(e)=>{
        setgender(e.target.value)
    }
    return(<>
    <label><b>Name:</b></label>
    <input onChange={namehandler} type="text" placeholder='Dharmendra'/>
    <h3>Name:{name}</h3>
    <label><b>DOB:</b></label>
    <input onChange={dobhandler} type="date" />
    <h3 >DOB:{dob}</h3>
    <textarea onChange={texthandler} cols="30" rows="5" placeholder='message'></textarea>
    <h3 style={{width:"300px"}}>Comment:{comment}</h3>
    <select onChange={statehandler}>
        <option >Select any one</option>
        <option >Agra</option>
        <option >Andhra Pradesh</option>
        <option >Assam</option>
        <option >Delhi</option>
        <option >Jharkhand</option>
        <option >Uttar Pradesh</option>
    </select>
    <h3 >State:{state}</h3>
    <input onChange={radiohandler} type="radio" value="Male" name="radiop"/>Male
    <input onChange={radiohandler} type="radio" value="Female" name="radiop"/>Female
    <input onChange={radiohandler} type="radio" value="Other" name="radiop"/>Other
    <h3> Gender:{gender}</h3>
    </>)

}
export default form;