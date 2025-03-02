import { useEffect, useRef, useState } from 'react';
import Question from '../questions.json'
import style from '../Quiz/Quiz.module.css'
function Quiz(){
  const selectedoptionA=useRef()
  const selectedoptionB=useRef()
  const selectedoptionC=useRef()
  const selectedoptionD=useRef()

    const[correct,setcorrect]=useState("");
    const[index,setindex]=useState(0)
    const[Que,setque]=useState(Question[index])
    //useEffect(()=>{setque(Question[1])})
    //console.log(Que.question);
    const clickhandlernext=(z)=>{
        setindex(index+1)
        setque(Question[index])
        selectedoptionA.current.style.backgroundColor="transparent";
        selectedoptionB.current.style.backgroundColor="transparent";
        selectedoptionC.current.style.backgroundColor="transparent";
        selectedoptionD.current.style.backgroundColor="transparent";
    }
    function selectoptionhandler(ans,z){
        
       if(ans==Que.answer)
       { 
        setcorrect("Correct")
       z.current.style.backgroundColor="lightgreen";
      } 
      else{
        setcorrect("Incorrect")
      


      if(Que.answer=="A"){
        selectedoptionA.current.style.backgroundColor="lightgreen";
        selectedoptionB.current.style.backgroundColor="red";
        selectedoptionC.current.style.backgroundColor="red";
        selectedoptionD.current.style.backgroundColor="red";
      }
      else if(Que.answer=="B"){
        selectedoptionA.current.style.backgroundColor="red";
        selectedoptionB.current.style.backgroundColor="lightgreen";
        selectedoptionC.current.style.backgroundColor="red";
        selectedoptionD.current.style.backgroundColor="red";
      }
      else if(Que.answer=="C"){
        selectedoptionA.current.style.backgroundColor="red";
        selectedoptionB.current.style.backgroundColor="red";
        selectedoptionC.current.style.backgroundColor="lightgreen";
        selectedoptionD.current.style.backgroundColor="red";
      }
      else if(Que.answer=="D"){
        selectedoptionA.current.style.backgroundColor="red";
        selectedoptionB.current.style.backgroundColor="red";
        selectedoptionC.current.style.backgroundColor="red";
        selectedoptionD.current.style.backgroundColor="lightgreen";
      }

    }  
       

    }
    return(
        <>
        <table className={style.container}>
        <h1 className={style.head}>Quiz</h1>
        <h3 className={style.questiontext}>{index+1}. {Que.question}</h3>
        <h4 onClick={()=>selectoptionhandler("A",selectedoptionA)}  ref={selectedoptionA} className={style.option}>1.{Que.A} <span></span></h4>
        <h4 onClick={()=>selectoptionhandler("B",selectedoptionB)}  ref={selectedoptionB} className={style.option}>2.{Que.B}</h4>
        <h4 onClick={()=>selectoptionhandler("C",selectedoptionC)}  ref={selectedoptionC} className={style.option}>3.{Que.C}</h4>
        <h4 onClick={()=>selectoptionhandler("D",selectedoptionD)}  ref={selectedoptionD} className={style.option}>4.{Que.D}</h4>
        <h5>{correct}</h5>
        <button  className={style.nextprev}>⬅️ Prev</button>
        <button onClick={clickhandlernext} className={style.nextprev}>Next ➡️</button>
        </table>
        </>)
    
}
export default Quiz;