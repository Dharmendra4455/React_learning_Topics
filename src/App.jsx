import Name from './assets/Name/Name'
import Picture from './Picture'
import Student from './Student'
import List from './list'
import Prop_list from './prop_list'
import Clickevent from './Clickevent'
import Use_state from './Use_state'
import Form from './form'
import Colorpicker from './Colorpicker'
import Object from './Object'
import Arrayhandler from './Arraayhandler'
import Todolist from './assets/Todolist/Todolist'
import Objectlist from './Objectlist'

function App() {
   const fruits=[
    {id:1,name:"Apple",calories:100},
    {id:2,name:"Mango",calories:45},
    {id:3,name:"Grapes",calories:60},
    {id:4,name:"Papaya",calories:110},
    {id:5,name:"Orange",calories:70}];

    const Vegetables=[
      {id:1,name:"Potato",calories:20},
      {id:2,name:"Spinach",calories:145},
      {id:3,name:"Bringle",calories:60},
      {id:4,name:"Pea",calories:20},
      {id:5,name:"Raddish",calories:10}];

  return (
    <>
     <Name/>
     <hr/>
     <Picture/>
     <Picture/>
     <Picture/>
     <Picture/>
     <Picture/>
     <hr></hr>
     <Student Names="Dharmendra Patel" age={22} gender="Male" isstud={true}/>
     <Student Names="Ankit Kumar" age={18} gender="Male" isstud={false}/>
     <Student Names="Ramesh Kumar" age={20} gender="Male" isstud={true}/>
     <Student Names="Ram Kumar" age={21} gender="Male" isstud={true}/>
     <Student Names="Priti Patel" age={23} gender="Female" isstud={true}/>
     <Student/>
     <hr></hr>
     <List/>
     <hr></hr>
     <Prop_list items={fruits} category="Fruits"/>
     <Prop_list items={Vegetables} category="Vegetables"/>
     <hr/>
     <Clickevent/>
     <hr/>
     <Use_state/>
     <hr/>    
     <Form/>
     <hr/>
     <Colorpicker/>
     <hr/>
     <Object/>
     <hr/>
     <Arrayhandler/>
     <hr/>
     <Objectlist/>  
     <hr/>   
     <Todolist/>
     </>

  )
}
export default App
