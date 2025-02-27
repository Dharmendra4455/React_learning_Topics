//import proptype from 'Prop-types';
function prop_list(prop){
    const listitem =prop.items;
    const cate=prop.category;
    const listitems=listitem.map(fruit=><li key={fruit.id} > {fruit.name}
        &nbsp; {fruit.calories}</li>)
        const categ={
            color:"red",
           marginLeft:"40px",
           fontSize:"25px",
           display:"inline",
           border:"2px solid black",
           paddingLeft:"10px",
           paddingRight:"10px",
        }
        const data={
            color:"blue",
            display:"inline",
        }
                                              //incase of 0 item category name remove
    return(
    <>
   {listitem.length>0 ? <h3 style={categ}>{cate}</h3>:null}  
     
    <h4 style={data}><ol>{listitems}</ol></h4>
     
     </>
        
    )
}
/*prop_list.prototype={
    cate:proptype.string,
    listitem:proptype.arrayOf(proptype.shape({id:proptype.number,
                                           name:proptype.string,   
                                           calories:proptype.number, }))
    }*/
export default prop_list