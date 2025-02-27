function list(){
    //const fruits=["Apple","Mango","Grapes","Papaya","Orange"];
    const fruits=[
    {id:1,name:"Apple",calories:120},
    {id:2,name:"Mango",calories:45},
    {id:3,name:"Grapes",calories:60},
    {id:4,name:"Papaya",calories:110},
    {id:5,name:"Orange",calories:70}];
     //Sorting
    //fruits.sort((a,b)=>a.name.localeCompare(b.name)) //Alphabetical Order
    //fruits.sort((a,b)=>b.name.localeCompare(a.name)) // Reverse Alphabetical Order
    //fruits.sort((a,b)=>a.calories-b.calories) // Numerical sorting
    //fruits.sort((a,b)=>b.calories-a.calories) //Reverse Numerical Sorting
    
    //Filtering
    //  const localfruit=fruits.filter(fruit=>fruit.calories>80) //high calories fruit
   //const localfruit=fruits.filter(fruit=>fruit.calories<80) //low calories fruit
   const localfruit=fruits.filter(fruit=>fruit.id>0)
    const f=localfruit.map(fruit=><li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>);
    return(<ol>{f}</ol>)
}
export default list;